import { r as registerInstance, h } from './index-e4b4a083.js';

const utrustDonateCss = ":host{display:block}";

const UtrustDonate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.amounts = "[]";
        this.min = 1;
    }
    parseAmountsProp(newAmounts) {
        if (newAmounts)
            this._amounts = JSON.parse(newAmounts);
    }
    componentWillLoad() {
        this.parseAmountsProp(this.amounts);
        if (this._amounts.length == 1) {
            this.selectedAmount = this._amounts[0];
        }
    }
    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.selectedAmount);
        this.loading = true;
        const response = await fetch("https://zdenal.builtwithdark.com/api/donate", {
            method: "POST",
            body: JSON.stringify({
                id: this.donateId,
                price: `${this.selectedAmount}`,
                return_url: window.location.origin,
                cancel_url: window.location.origin,
                first_name: 'firstName',
                last_name: 'lastName',
                email: 'email@email.com',
            })
        });
        if (!response.ok) {
            alert("Make Donate Error");
            this.loading = false;
            return;
        }
        const data = await response.json();
        window.location.href = data.redirect_url;
    }
    handleChange(event) {
        this.selectedAmount = event.target.value < this.min ? this.min : event.target.value;
    }
    renderChoices() {
        if (this._amounts.length > 1) {
            return (h("div", null, this._amounts.map((amount) => h("span", null, h("input", { type: "radio", name: "donate-amount", id: `donate-amount-${amount}`, value: amount, onChange: this.handleChange.bind(this) }), h("label", { htmlFor: `donate-amount-${amount}` }, amount)))));
        }
    }
    renderCustom() {
        if (this._amounts.length == 0) {
            return (h("label", null, "Amount:", h("input", { type: "number", min: this.min, value: this.selectedAmount, onInput: this.handleChange.bind(this) })));
        }
    }
    buttonTitle() {
        if (!!this.selectedAmount) {
            return `Donate ${this.selectedAmount} ${this.currency}`;
        }
        return "Donate";
    }
    render() {
        return (h("form", { onSubmit: (e) => this.handleSubmit(e) }, this.renderChoices(), this.renderCustom(), h("div", null, h("input", { disabled: !this.selectedAmount || this.loading, type: "submit", value: this.buttonTitle() }))));
    }
    static get watchers() { return {
        "amounts": ["parseAmountsProp"]
    }; }
};
UtrustDonate.style = utrustDonateCss;

export { UtrustDonate as utrust_donate };
