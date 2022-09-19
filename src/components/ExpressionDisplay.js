import React from "react";

const ExpressionDisplay = ({rule}) => {
    const startExpression = () => {
        if (rule === 'product') {
            return (
                <div className="product-start-expression">
                    
                </div>
            )
        }
    }
    return (
        <div>
            Expression Display
        </div>
    );
};

export default ExpressionDisplay;