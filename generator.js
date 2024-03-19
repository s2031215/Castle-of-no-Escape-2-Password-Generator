window.onload = function () {
    var root = new Vue({
        el: '#CnE2',
        data: {
            seed: "000",
            char: "1",
            artefacts: {
                stt: false,
                ru: false,
                ftw: false,
                ee: false,
                ed: false,
                bf: false,
                gs: false
            },
            sword: "Empty",
            armor: "0",
        },
        watch: {
            seed: function (val, oldVal) {
                if (val != oldVal) {
                    let value = Math.floor(val);

                    if (val > 999) {
                        //console.log("Too Big",Math.floor(e.target.value/10));
                        value = Math.floor(value / 10);
                    }

                    value = String(value).padStart(3, "0");
                    this.seed = value
                }
            }
        },
        computed: {
            bincode: function () {
                var bin = "";
                switch (this.sword) {
                    case "Empty":
                        bin = bin + "0000000000";
                        break;
                    case "False Sword":
                        bin = bin + "1111100000";
                        break;
                    case "Real Sword":
                        bin = bin + "0000011111";
                        break;
                    default:
                        bin = bin + "0000000000";
                        break;
                }
                Object.values(this.artefacts).forEach((val) => {
                    if (val) {
                        bin = bin + "1";
                    } else {
                        bin = bin + "0";
                    }
                });
                bin = bin + Number(this.char).toString(2).padStart(3, "0");
                bin = bin + Number(this.seed).toString(2).padStart(10, "0");
                bin = bin + Number(this.armor).toString(2).padStart(3, "0");
                bin = bin + "000";
                bin =
                    bin +
                    Number(bin.match(/1/g).length % 8)
                        .toString(2)
                        .padStart(3, "0");
                //console.log(bin.match(/1/g).length);
                console.log(bin);
                return bin;
            },
            passcode: function () {
                var bin = this.bincode;
                var cmd = "";

                for (let i = 0; i < 13; i++) {
                    cmd += numformant(parseInt(bin.slice(i * 3, i * 3 + 3), 2));
                    if ((i + 1) % 3 === 0 && i !== 0) {
                        cmd += "    ";
                    }
                }
                return cmd;
            }
        }
    });

    function numformant(num) {
        switch (num) {
            case 0:
                return "⬆️";
            case 1:
                return "⬇️";
            case 2:
                return "⬅️";
            case 3:
                return "➡️";
            case 4:
                return "🆉";
            case 5:
                return "🆇";
            case 6:
                return "🅲";
            case 7:
                return "↩️";
            default:
                return;
        }
    }
}