import React from "react";

import "./CardCategorie.scss"

const CardCategorie = () => {
    return (
        categorie.map((list, index) => {
            return (
                <Link to="" key={index}>
                    <a href="">
                        <div className="div-img">
                            <div className="img">
                                <img src={list.img} alt="" />
                                <h4 className="categorie-name"> {list.name} </h4>
                            </div>
                        </div>
                    </a>
                </Link>
            )
        })
    )
}