var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '窗口属于哪个模块？',
        }, {
            type: 'input',
            name: 'modalName',
            message: '要创建的窗口名称：'
        }, {
            type: 'confirm',
            name: 'useHtml',
            message: '要不要单独创建一个html模板文件?'
        }]).then((answers) => {
            if (answers.useHtml) {
                this._createModalWithHtml(answers.moduleName, answers.modalName);
            } else {
                this._createModal(answers.moduleName, answers.modalName);
            }
        });
    }
    _createModal(moduleName, modalName) {
        const upName = this._getUpName(moduleName);
        const upModalName = this._getUpName(modalName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), upModalName, modalName };
        this.fs.copyTpl(
            this.templatePath('mt.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/windows/${modalName}/${modalName}.component.ts`),
            params
        );
    }
    _createModalWithHtml(moduleName, modalName) {
        const upName = this._getUpName(moduleName);
        const upModalName = this._getUpName(modalName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), upModalName, modalName };
        this.fs.copyTpl(
            this.templatePath('m.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/windows/${modalName}/${modalName}.component.ts`),
            params
        );
        this.fs.copyTpl(
            this.templatePath('m.html'),
            this.destinationPath(`src/app/modules/${moduleName}/windows/${modalName}/${modalName}.component.html`),
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