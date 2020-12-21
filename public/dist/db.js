

let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (a) {
    const b = a.target.result;
    b.createObjectStore("pending", { autoIncrement: !0 })
},

    request.onsuccess = function (a) {
        db = a.target.result,
            navigator.onLine &&
            checkDatabase()
    },

    request.onerror = function (a) {
        console.log("Error! " + a.target.errorCode)
    };

function saveRecord(a) {

    const b = db.transaction(["pending"], "readwrite"),
        c = b.objectStore("pending");
    c.add(a)
}

function checkDatabase() {

    const a = db.transaction(["pending"], "readwrite"),
        b = a.objectStore("pending"),
        c = b.getAll();

    c.onsuccess = function () {
        0 < c.result.length && fetch("/api/transaction/bulk", {
            method: "POST",
            body: JSON.stringify(c.result),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(a => a.json())
            .then(() => {
                const a = db.transaction(["pending"], "readwrite"),
                    b = a.objectStore("pending");
                b.clear()
            })
    }
}

window.addEventListener("online", checkDatabase);

