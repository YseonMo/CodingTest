function solution(order) {
    return order.map(str => 
        str.replace(/iceamericano|americanoice|hotamericano|americanohot|anything/g, 'americano')
           .replace(/icecafelatte|cafelatteice|hotcafelatte|cafelattehot/g, 'cafelatte')
    ).reduce((sum, drink) => sum + (drink === 'americano' ? 4500 : 5000), 0);
}
