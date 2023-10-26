import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="loader">
            <div className="scanner">
                <span>Loading...</span>
            </div>
        </div>
    );
}

export { TodosLoading }