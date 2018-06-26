import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { GuardService } from './cores/services';

const routes: Routes = [

    // 此处设置网站首页
    { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },

    // 懒加载子模块
    { path: 'system', loadChildren: './modules/system/system.module#SystemModule', canActivate: [GuardService] },

    // 最后全局匹配其他链接
    { path: '**', redirectTo: 'dashboard/error', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            // preloadingStrategy: PreloadAllModules,
            useHash: false
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
