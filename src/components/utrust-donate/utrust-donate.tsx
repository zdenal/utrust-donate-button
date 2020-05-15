import { Component, ComponentInterface, State, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'utrust-donate',
  styleUrl: 'utrust-donate.css',
  shadow: true,
})
export class UtrustDonate implements ComponentInterface {
  private _amounts: Array<number>;
  @Prop() amounts: string = "[]";
  @Prop() donateId: string;
  @Prop() currency: string;

  @State() selectedAmount: number;

  @Watch('amounts')
  parseAmountsProp(newAmounts: string) {
    if (newAmounts) this._amounts = JSON.parse(newAmounts);
  }

  componentWillLoad() {
    this.parseAmountsProp(this.amounts);

    if(this._amounts.length == 1) {
      this.selectedAmount = this._amounts[0];
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    console.log(this.selectedAmount);
    // send data to our backend

    const response = await fetch("https://zdenal.builtwithdark.com/api/donate", {
      method: "POST",
      body: JSON.stringify({
        id: this.donateId,
        price: `${this.selectedAmount}`,
        return_url: window.location.origin,
        cancel_url: window.location.origin,
        first_name: 'firstName', // will be taken from merchant on BE
        last_name: 'lastName', // will be taken from merchant on BE
        email: 'email@email.com', // will be taken from merchant on BE
      })
    })

    if (!response.ok) {
      alert("Make Donate Error")
      return
    }

    const data = await response.json()
    window.location.href = data.redirect_url;
  }

  handleChange(event) {
    this.selectedAmount = event.target.value;
  }

  renderChoices() {
    if (this._amounts.length > 1) {
      return (
        <div>
          {this._amounts.map((amount) =>
            <span>
              <input type="radio" name="donate-amount" id={`donate-amount-${amount}`} value={amount} onChange={this.handleChange.bind(this)} />
              <label htmlFor={`donate-amount-${amount}`}>{amount}</label>
            </span>
          )}
        </div>
      )
    }
  }

  renderCustom() {
    if (this._amounts.length == 0) {
      return (
        <label>
          Amount:
          <input type="number" value={this.selectedAmount} onInput={this.handleChange.bind(this)} />
        </label>
      )
    }
  }

  buttonTitle() {
    if(!!this.selectedAmount) {
      return `Donate ${this.selectedAmount} ${this.currency}`
    }

    return "Donate"
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        {this.renderChoices()}
        {this.renderCustom()}
        <div>
          <input disabled={!this.selectedAmount} type="submit" value={this.buttonTitle()} />
        </div>
      </form>
    );
  }

}
