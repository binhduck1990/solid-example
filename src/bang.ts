export default class Dola {
    change(money: number) {
        return money/(4*100)
    }

    changeBack(money: number) {
        return money*4*100
    }
}