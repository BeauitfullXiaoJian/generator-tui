import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
/**
 * tool-ui
 */
import {
    ButtonModule,
    ModalModule,
    PaginationModule,
    ConfirmModule,
    CheckboxModule,
    CollapseModule,
    TabModule,
    ImageModule,
    SelectModule,
    UploadModule,
} from 'ng-tools-ui';

/**
 * 路由模块
 */
import { SystemRoutingModule, declarationComponents, entryComponents, providers } from './system.routing';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        PaginationModule,
        ConfirmModule,
        CollapseModule,
        TabModule,
        ImageModule,
        SelectModule,
        CheckboxModule,
        UploadModule,
        SortablejsModule,
        SystemRoutingModule,
    ],
    declarations: [
        declarationComponents,
    ],
    entryComponents: [
        entryComponents,
    ],
    providers: [
        providers
    ]

})
export class SystemModule { }
