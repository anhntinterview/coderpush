import { PostDTO } from 'shared/dto/post.dto';
import { SVGIcon } from 'template/component/svg.template';
import { ITooltipItem } from 'template/component/tooltip.template/type';
import TooltipTemplateModel from 'template/controller/tooltip.model';

export enum TooltipDirection {
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    BOTTOM = 'bottom',
}


export const tooltipData: Array<ITooltipItem> = [
    {
        name: 'edit',
        icon: SVGIcon.EditIcon,
    },
];
