import React, { Component } from "react";
import Common from "./Common";

class ItemListContainer extends Component {

    render() {

        return (
            <>
                <Common.TitlePage tilte={this.props.textoTitulo}>
                </Common.TitlePage>
            </>
        )
    }
}

export default ItemListContainer;