const stringy = "QIGNAEKIRLRNGEAE",
    str1 = "GRAEK",
    notan="Not an instance"


const matrix_row = inp=> {
    let mat = [[]]
    let size = Math.sqrt(inp.length)
    for (let i = 0; i < size; i++) {
        mat[i] = Array.from(inp.slice(i*size, (i+1)*size))
        let row = ""
        for (let j = 0; j < size; j++) {
            const end = (j==size-1) ? '\n' : ', '
            row += mat[i][j] + end
        }
        console.log(row)
    }
    return mat
}

const init = (inp, mat)=> {
    let init_cells = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (inp[0] === mat[i][j])
            init_cells.push({ "first_element": mat[i][j], "i": i, "j": j })
        }
    }
    return init_cells
}

const user_string = (inp, mat)=> {
    let size = mat.length
    let new_mat = Array(size)
    let init_cells = init(inp, mat)
    
    for (let i = 0; i<4; i++) {
        let b = Array(4)
        new_mat[i] = b
    }
    console.log(new_mat)

    for (const str_char of inp) {
        console.log(str_char, ":")
        for (let i = 0; i < size; i++) {
            row = new_mat[i]
            for (let j = 0; j < size; j++) {
                if (str_char === mat[i][j]) {
                    new_mat[i][j] = mat[i][j]
                }
            }
        }
    }

    console.log(init_cells)
    for (const first_init of init_cells) {
        let cells = [first_init]
        for (const str_char of inp) {
            for (let i = 0; i < size; i++) {
                if (i > (cells.slice(-1)[0].i)-2 && i < (cells.slice(-1)[0].i)+2) {
                    // console.log("It's okey!")
                    const current = new_mat[i].indexOf(str_char)
                    console.log(str_char, i, current)
                    if (current > 0 && current > (cells.slice(-1)[0].j)-2 && current < (cells.slice(-1)[0].j)+2) {
                        if ((i === cells.slice(-1)[0].i || current === cells.slice(-1)[0].j) && !(i === cells.slice(-1)[0].i && current === cells.slice(-1)[0].j))
                            cells.push({ "element": str_char, "i": i, "j": current })
                    }
                }
            }
        }
        // if (cells.length === inp.length) 
        return cells
    }
    return "Nah...  "

    // let cells = []

    // console.log(inp)
    
    // for (let n = 0; n < inp.length; n++) {
    //     const str_char = inp[n]
    //     if (cells.length > 0) {
    //         const ind_i = cells.slice(-1)[0].i
    //         const ind_j = cells.slice(-1)[0].j
            
    //         let neighbours = []
    //         for (let i = 0; i < size; i++) {
    //             row = mat[i].slice()
    //             neighbours[i] = row
    //             for (let j = 0; j < size; j++) {
    //                 elem = row[j]
    //                 if ((i === ind_i || j === ind_j) && !(i === ind_i && j === ind_j)) {
    //                     if ((i >= ((ind_i > 0) ? ind_i-1 : 0)) && (i < ind_i+2)) {
    //                         if ((j >= ((ind_j > 0) ? ind_j-1 : 0)) && (j < ind_j+2)) {
    //                             // neighbours[i][j] = elem
    //                             if (str_char == elem) {
    //                                 cells.push({"item": str_char, "i": i, "j": j})
    //                                 break
    //                             }
    //                             // console.log(elem + ": ", '\n\ti: ', i, ind_i, '\n\tj: ', j, ind_j, '\n', neighbours)
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // // if (cells.length === inp.length) return cells
    // // else return notan + "\nOnly " + cells.length
    // return cells
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