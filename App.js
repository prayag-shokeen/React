
/*
createElement takes 3 arguments, 
    1. type of tag you want to create, i.e. h1, h2, div etc.
    2. an object, which is the attribute you want to give to that element i.e. className, id etc.
    3. The content of that element.
*/
const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello world from React !!!");


/*
Let's just see an example of nested elements.
*/
const nestedElement = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "Hey I am H1 element tagged inside nested div"
        )
    )
)

/*
Now we know how we can create nested elements using pure JS.
Let's just see how to create siblings inside nested elements.
i.e. 
Third argument to createElement can be an array using which we can have siblings.
*/
const siblingsInNestedElement = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "Hey I am H1 element tagged inside child1 div"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Hey I am H2 element tagged inside child1 div"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "Hey I am H1 element tagged inside child2 div"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Hey I am H2 element tagged inside child2 div"
                )
            ]
        ),
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(siblingsInNestedElement);