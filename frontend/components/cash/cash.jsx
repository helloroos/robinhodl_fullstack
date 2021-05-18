import React from 'react';

class Cash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transfer_type: "",
            amount: 0,
            user_id: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const transferDetails = Object.assign({}, this.state);
        this.props.transfer(transferDetails);
    }

    handleChange(event) {
        this.setState(() => {
            return {
                transfer_type: "deposit",
                amount: event.target.value,
                user_id: 1
            }
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="outmost-cash-container">
                <div className="outer-cash-container">
                    <div className="main-details">
                        <div className="details">
                            <header>
                                <h1>Cash</h1>
                                <h1>$4</h1>
                            {/* <img src="" alt="" /> */}
                            </header>
                            <section className="history">
                                <h2>Recent History</h2>
                            </section>
                        </div>
                        <div className="side-panel">
                            <form onSubmit={this.handleSubmit}>
                                <header>
                                    <select>
                                        <option>Deposit</option>
                                        <option>Withdraw</option>
                                    </select>
                                </header>
                                <div>
                                    <p>From</p>
                                    <select>
                                        <option>Universal Bank</option>
                                        <option>Robinhodl</option>
                                    </select>
                                </div>
                                <div>
                                    <p>To</p>
                                    <select>
                                        <option>Robinhodl</option>
                                        <option>Universal Bank</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Amount</p>
                                    <input
                                        placeholder="$0"
                                        onChange={this.handleChange}
                                        required/>
                                </div>
                                <div>
                                    <button>Transfer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cash;