var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'projectName',
            message: '请输入要创建的项目目录名称',
        }]).then((answers) => {
            this.fs.copy(this.sourceRoot(), answers.projectName);
        });
    }
};