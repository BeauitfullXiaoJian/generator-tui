var Generator = require('yeoman-generator/lib');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '类属于哪个模块？',
        }, {
            type: 'input',
            name: 'className',
            message: '要创建的类名称:'
        }]).then((answers) => {
            const params = { moduleName: answers.moduleName, className: answers.className, date: new Date().toLocaleString() };
            this.fs.copyTpl(
                this.templatePath('class.ts'),
                this.destinationPath(`src/app/modules/${params.moduleName}/classes/${params.className}.class.ts`),
                params
            );
        });
    }
};