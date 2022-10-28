export default class Dola {
    change(money: number) {
        return money/(23*100)
    }

    changeBack(money: number) {
        return money*23*100
    }
}