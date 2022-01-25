/*
 * @Description:  commitlint config
 * @Autor: Bowen
 * @Date: 2022-01-25 10:04:44
 * @LastEditors: Bowen
 * @LastEditTime: 2022-01-25 10:11:37
 */
module.exports = {
  // extends: ["@commitlint/config-conventional"], // 去除基本设置
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "✨feat", // 新功能
        "🐛fix", //  修复
        "📚docs", // 文档变更
        "💎style", // 代码格式（不影响代码运行的变动）
        "📦refactor", // 重构（既不是增加feature）,也不是修复bug
        "🚀pref", // 性能优化
        "🚨test", // 增加测试
        "🛠chore", // 构建过程或辅助工具的变动
        "⚙️revert", // 回退
        "♻️build" // 打包
      ]
    ],
    // subject 大小写不做校验
    "subject-case": [0]
  }
};
