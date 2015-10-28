# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'cui-i18n'
set :scm, 'nexus'
set :nexus_url, 'http://nexus.thirdwavellc.com'
set :nexus_repository, 'snapshots'
set :nexus_group_id, 'com.covisint.cui'
set :nexus_artifact_name, 'cui-styleguide'
set :nexus_artifact_ext, 'tar.gz'
set :nexus_artifact_classifier, 'static'
set :nexus_artifact_version, '0.0.1-SNAPSHOT'

set :deploy_to, '/var/www/covisint-cui/cui-styleguide'
set :keep_releases, 3

set :slack_webhook, 'https://hooks.slack.com/services/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'
set :slack_channel, '#cui-styleguide'
set :slack_deploy_user, -> { ENV['USER'] || ENV['USERNAME'] }
set :slack_icon_url, -> { 'http://gravatar.com/avatar/885e1c523b7975c4003de162d8ee8fee?r=g&s=40' }
