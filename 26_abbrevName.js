function abbrevName(name) {

        // memisahkan nama menjadi dua kata
        let words = name.split(" ")

        // mengambil huruf pertama dari setiap kata, dan mengkonversinya menjadi kapital
        let initials = words.map((word => word[0].toUpperCase()));

        return initials.join(".")
}

        console.log(abbrevName("Alif Rendy"))
