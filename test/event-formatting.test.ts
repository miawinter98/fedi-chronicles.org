import { assert, expect, test } from 'vitest';

const events = import.meta.glob("../src/events/*.json", { eager: true });

test("Validate required Properties", () => {
    let requiredProperties = ["type", "date", "title", "description"];

    for (const file in events) {
        const event = events[file];
        let prop = [...requiredProperties];
        for (const property of [...prop]) {
            if (typeof(event[property]) === "string") {
                prop.splice(prop.indexOf(property), 1);
            }
        }
        assert.isEmpty(prop, `Missing properties [${prop}] in ${file}, found: [${Object.keys(event).filter(s => s != "default")}]`);
    }
});
