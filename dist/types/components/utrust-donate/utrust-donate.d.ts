import { ComponentInterface } from '../../stencil-public-runtime';
export declare class UtrustDonate implements ComponentInterface {
    private _amounts;
    amounts: string;
    donateId: string;
    min: number;
    currency: string;
    selectedAmount: number;
    loading: boolean;
    parseAmountsProp(newAmounts: string): void;
    componentWillLoad(): void;
    handleSubmit(e: any): Promise<void>;
    handleChange(event: any): void;
    renderChoices(): any;
    renderCustom(): any;
    buttonTitle(): string;
    render(): any;
}
