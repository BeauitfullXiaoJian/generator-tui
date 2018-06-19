var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    create() {
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: '要创建的模块名称',
        }, {
            type: 'confirm',
            name: 'createPage',
            message: '要不要创建一个页面例子?'
        }]).then((answers) => {
            if (answers.createPage === true) {
                return this.prompt([{
                    type: 'input',
                    name: 'pageName',
                    message: '要创建的页面名称',
                }, {
                    type: 'confirm',
                    name: 'createService',
                    message: '要不要在模块里面建一个服务?'
                }]).then((answersTwo) => {
                    if (answersTwo.createService) {
                        this._createModuleWithPageService(answers.moduleName, answersTwo.pageName);
                    } else {
                        this._createModuleWithPage(answers.moduleName, answersTwo.pageName);
                    }
                });
            } else {
                this._createModule(answers.moduleName);
            }
        });
    }
    _createModule(moduleName) {
        const upName = this._getUpName(moduleName);
        this.fs.copyTpl(
            this.templatePath('m.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.module.ts`, ),
            { moduleName, upName, date: new Date().toLocaleString() }
        );
        this.fs.copyTpl(
            this.templatePath('r.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.routing.ts`),
            { moduleName, upName, date: new Date().toLocaleString() }
        );
        console.log(`app.routing.ts中的路由规则：{ path: '${moduleName}', loadChildren: './modules/${moduleName}/${moduleName}.module#${upName}Module', canActivate: [GuardService] }`)
    }
    _createModuleWithPage(moduleName, pageName) {
        const upName = this._getUpName(moduleName);
        const upPageName = this._getUpName(pageName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), pageName, upPageName };
        this.fs.copyTpl(
            this.templatePath('m.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.module.ts`, ),
            params
        );
        this.fs.copyTpl(
            this.templatePath('rp.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.routing.ts`),
            params
        );
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
        console.log(`app.routing.ts中的路由规则：{ path: '${moduleName}', loadChildren: './modules/${moduleName}/${moduleName}.module#${upName}Module', canActivate: [GuardService] }`)
    }
    _createModuleWithPageService(moduleName, pageName) {
        const upName = this._getUpName(moduleName);
        const upPageName = this._getUpName(pageName);
        const params = { moduleName, upName, date: new Date().toLocaleString(), pageName, upPageName };
        this.fs.copyTpl(
            this.templatePath('m.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.module.ts`, ),
            params
        );
        this.fs.copyTpl(
            this.templatePath('rps.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/${moduleName}.routing.ts`),
            params
        );
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
        this.fs.copyTpl(
            this.templatePath('s.txt'),
            this.destinationPath(`src/app/modules/${moduleName}/services/${moduleName}.service.ts`),
            params
        );
        console.log(`app.routing.ts中的路由规则：{ path: '${moduleName}', loadChildren: './modules/${moduleName}/${moduleName}.module#${upName}Module', canActivate: [GuardService] }`)
    }
    _getUpName(name) {
        let upName = name.replace(/-(\w)/g, function (all, letter) {
            return letter.toUpperCase();
        });
        upName = upName.replace(/^\S/, function (s) { return s.toUpperCase(); });
        return upName;
    }
};