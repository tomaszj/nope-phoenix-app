use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :nope_app, NopeApp.Endpoint,
  secret_key_base: System.get_env("SECRET_KEY_BASE")
