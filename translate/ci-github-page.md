# Github Page 部署
:::tip
部署 Github Page 使用 `git push --force` 覆盖当前分支的历史记录，所以确定你只是处于这个特殊的目的部署到分支，就像 `gh_pages` 。
可能需要通过设置 `keep_history` 为 `true` 禁止"force push"行为，
:::

Travis CI 可以在 build 成功后部署你的静态文件到 Github Page 。</br>
你可能需要提供一个 `access token` 然后设置部署提供者的细节。 </br>
下面是一个最小化配置，添加到你的 `.travis.yml` 。

```yml
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN  # Set in the settings page of your repository, as a secure variable
  keep_history: true
  on:
    branch: master
```
:::warning
确定你将 `skip_cleanup` 设置为 `true` ，否则 Travis CI 将会删除所有构建中创建的文件， 这可能会删除你想上传的文件。
:::

## 设置 Github token
你需要生成一个个人 `public_repo` 或 `repo` `access token` 。（ 对于私有项目 `repo` 是必须的）。由于 token 应该是私有的
你想要在你的仓库设置或在 `.travis.yml` 中通过加密变量的方式安全的将他发送到  Travis 。

## 之后的配置
- local_dir: 推送到 Github Page 的目录，默认当前目录。 可以通过绝对路径或相对路径特殊指定。
- repo: Repo slug, 默认当前 repo.
- target_branch: 推送 local_dir 内容到分支（force，查看: keep_history）, 默认  gh_pages。
- keep_history: Optional, create incremental commit instead of doing push force, defaults to false.
- fqdn: Optional, sets a custom domain for your website, defaults to no custom domain support.
- project_name: Defaults to value of fqdn or repo slug, used for metadata.
- email: Optional, committer info, defaults to deploy@travis-ci.org.
- name: Optional, committer, defaults to Deployment Bot.
- committer_from_gh: Optional, defaults to false. Allows you to use the token’s owner name and email for commit. Overrides email and name options.
- allow_empty_commit: Optional, defaults to false. Enabled if only keep_history is true.
- github_url: Optional, the URL of the self-hosted GitHub enterprise, defaults to github.com.
- verbose: Optional, be verbose about internal steps, defaults to false.
- deployment_file: Optional, defaults to false, enables creation of deployment-info files.