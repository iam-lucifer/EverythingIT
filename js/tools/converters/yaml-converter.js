// This file provides functionality to convert YAML to JSON and vice versa.

function yamlToJson(yaml) {
    try {
        const json = YAML.parse(yaml);
        return JSON.stringify(json, null, 2);
    } catch (e) {
        console.error("Invalid YAML:", e);
        return null;
    }
}

function jsonToYaml(json) {
    try {
        const obj = JSON.parse(json);
        return YAML.stringify(obj);
    } catch (e) {
        console.error("Invalid JSON:", e);
        return null;
    }
}

document.getElementById("convertYamlToJson").addEventListener("click", function() {
    const yamlInput = document.getElementById("yamlInput").value;
    const jsonOutput = yamlToJson(yamlInput);
    document.getElementById("jsonOutput").value = jsonOutput || "Conversion failed.";
});

document.getElementById("convertJsonToYaml").addEventListener("click", function() {
    const jsonInput = document.getElementById("jsonInput").value;
    const yamlOutput = jsonToYaml(jsonInput);
    document.getElementById("yamlOutput").value = yamlOutput || "Conversion failed.";
});