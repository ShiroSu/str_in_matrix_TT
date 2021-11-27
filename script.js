const stringy = "QIGNAEKIRLRNGEAE",
    str1 = "KING",
    notan="Not an instance"


const matrix_row = inp=> {
    let mat = [[]]
    let size = Math.sqrt(inp.length)
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) 
            row[j] = inp[i*size + j]
        mat[i] = row
    }
    for (let i = 0; i < size; i++) {
        let row = ""
        for (let j = 0; j < size; j++) {
            const end = (j==size-1) ? '\n' : ', '
            row += mat[i][j] + end
        }
        console.log(row)
    }
    return mat
}
    

const user_string = (inp, mat)=> {
    const size = mat[0].length
    let cells = []

    console.log(inp)
    
    for (let n = 0; n < inp.length; n++) {
        const str_char = inp[n]
        if (cells.length > 0) {
            const ind_i = cells.slice(-1)[0].i
            const ind_j = cells.slice(-1)[0].j
            
            let neighbours = []
            for (let i = 0; i < size; i++) {
                row = mat[i].slice()
                neighbours[i] = row
                for (let j = 0; j < size; j++) {
                    elem = row[j]
                    if ((i === ind_i || j === ind_j) && !(i === ind_i && j === ind_j)) {
                        if ((i >= ((ind_i > 0) ? ind_i-1 : 0)) && (i < ind_i+2)) {
                            if ((j >= ((ind_j > 0) ? ind_j-1 : 0)) && (j < ind_j+2)) {
                                // neighbours[i][j] = elem
                                if (str_char == elem) {
                                    cells.push({"item": str_char, "i": i, "j": j})
                                    break
                                }
                                // console.log(elem + ": ", '\n\ti: ', i, ind_i, '\n\tj: ', j, ind_j, '\n', neighbours)
                            }
                        }
                    }
                }
            }
        }
        else {
            for (let i = 0; i < size; i++) {
                row = mat[i].slice()
                for (let j = 0; j < size; j++) {
                    mat_char = row[j]
                    if (str_char == mat_char) {
                        cells[0] = {"first item": str_char, "i": i, "j": j}
                        break
                    }
                } //break
            }
        }
    }
    // if (cells.length === inp.length) return cells
    // else return notan + "\nOnly " + cells.length
    return cells
}

const str2 = big_str=> {
    let lil_str = Array(Math.floor(Math.random() * (7 - 3 + 1)) + 3).fill(0)
    lil_str.map((item, i)=> {
        lil_str[i] = Array.from(big_str)[Math.floor(Math.random() * (big_str.length + 1))]
    })
    return lil_str.join('')
}

// for (let n = 0; n < 100; n++) {
//     res = user_string(str2(stringy), matrix_row(stringy))
//     console.log(res)
// }

res = user_string(str1, matrix_row(stringy))
console.log(res)