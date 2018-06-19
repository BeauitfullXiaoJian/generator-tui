var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '服务属于哪个模块？',
        }, {
            type: 'input',
            name: 'serviceName',
            message: '要创建的服务名称:'
        }]).then((answers) => {
            this._createService(answers.moduleName, answers.serviceName);
        });
    }
    _createService(moduleName, serviceName) {
        const upName = this._getUpName(moduleName);
        const upServiceName = this._getUpName(serviceName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), serviceName, upServiceName };
        this.fs.copyTpl(
            this.templatePath('s.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/services/${serviceName}.service.ts`),
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