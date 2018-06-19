var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '页面属于哪个模块？',
        }, {
            type: 'input',
            name: 'pageName',
            message: '要创建的页面名称:'
        }]).then((answers) => {
            this._createPage(answers.moduleName, answers.pageName);
        });
    }
    _createPage(moduleName, pageName) {
        const upName = this._getUpName(moduleName);
        const upPageName = this._getUpName(pageName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), pageName, upPageName };
        this.fs.copyTpl(
            this.templatePath('p.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/pages/${pageName}/${pageName}.component.ts`),
            params
        );
        this.fs.copyTpl(
            this.templatePath('p.scss'),
            this.destinationPath(`src/app/modules/${moduleName}/pages/${pageName}/${pageName}.component.scss`),
            params
        );
        this.fs.copyTpl(
            this.templatePath('p.html'),
            this.destinationPath(`src/app/modules/${moduleName}/pages/${pageName}/${pageName}.component.html`),
            params
        );
    }
    _getUpName(name) {
        let upName = name.replace(/-(\w)/g, function (all, letter) {
            return letter.toUpperCase();
        });
        upName = upName.replace(/^\S/, function (s) { return s.toUpperCase(); });
        return upName;
    }
};