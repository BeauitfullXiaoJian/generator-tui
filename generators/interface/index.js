var Generator = require('yeoman-generator/lib');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '接口属于哪个模块？',
        }, {
            type: 'input',
            name: 'className',
            message: '要创建的接口名称:'
        }]).then((answers) => {
            const params = { moduleName: answers.moduleName, className: answers.className, date: new Date().toLocaleString() };
            this.fs.copyTpl(
                this.templatePath('interface.ts'),
                this.destinationPath(`src/app/modules/${params.moduleName}/interfaces/${params.className}.interface.ts`),
                params
            );
        });
    }
};