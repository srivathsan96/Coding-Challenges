// Source: https://namastedev.com/practice/jsonstringify

/*
JSON.stringify

Implement a custom version of JSON.stringify. This function should serialize a JavaScript object or value into a JSON string. The implementation should mimic the behavior of the native JSON.stringify, including handling of:

Primitives (string, number, boolean, null)
Arrays and nested arrays
Plain objects with nested properties
Functions and undefined (ignored in objects, replaced with null in arrays)

Example Inputs & Outputs

JSONStringify("hello") 
// → '"hello"'

JSONStringify({ name: "Alice", age: 30 }) 
// → '{"name":"Alice","age":30}'

JSONStringify([1, "a", true, null]) 
// → '[1,"a",true,null]'

JSONStringify({ a: undefined, b: function() {}, c: 5 }) 
// → '{"c":5}'

JSONStringify([undefined, function() {}, 5]) 
// → '[null,null,5]'

Constraints & Edge Cases

Should handle all basic types: string, number, boolean, null, object, array
Functions and undefined:
    Omitted in objects
    Converted to null in arrays
Throws TypeError on circular references
Does not handle special objects like Date, Set, Map, etc.
*/

function JSONStringify(value) {
    // Your implementation
    const seen = new Set();

    function stringify(value) {
        if (value === null) return "null";

        const type = typeof value;

        if (type === "number" || type === "boolean") return String(value);
        if (type === "string") return `"${value}"`;
        if (type === "undefined" || type === "function") return undefined;

        if (Array.isArray(value)) {
            const result = value.map((item) => {
                const str = stringify(item);
                return str === undefined ? "null" : str;
            });

            return `[${result.join(",")}]`;
        }

        if (type === "object") {
            if (seen.has(value))
                throw new TypeError("Converting circular structure to JSON");
            seen.add(value);

            const props = Object.entries(value)
                .map(([key, value]) => {
                    const strVal = stringify(value);
                    if (strVal === undefined) return undefined;
                    return `"${key}":${strVal}`;
                })
                .filter(Boolean);

            seen.delete(value);
            return `{${props.join(",")}}`;
        }

        return undefined;
    }

    return stringify(value);
}