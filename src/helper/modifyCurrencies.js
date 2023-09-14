export function modifyCurrencies(a) {
    let modifiedArray = []
    for (let base in a) {
        modifiedArray.push({
            base: base,
            value: a[base]
        })
    }
    return modifiedArray
}