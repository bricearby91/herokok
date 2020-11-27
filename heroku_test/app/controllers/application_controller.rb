class ApplicationController < ActionController::Base
    before_action :configure_devise_parameters, if: :devise_controller?

	def configure_devise_parameters
  		devise_parameter_sanitizer.permit(:sign_up) {|u| u.permit(:first_name, :last_name, :email, :password, :password_confirmation)}
		devise_parameter_sanitizer.permit(:account_update) {|u| u.permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)}
	end

    def after_sign_in_path_for(resource_or_scope)
        session[:user_id] = current_user.id
        @cart = Cart.new(user_id: current_user.id)
        if @cart.save
          root_path
        end
    end
end
