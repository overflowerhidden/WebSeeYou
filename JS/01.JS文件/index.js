let Fun = function (val) {
  const lists = [
    ['凤凰县', 'yc_hs_000106'],
    ['保靖县', 'yc_hs_000097'],
    ['古丈县', 'yc_hs_000017'],
    ['龙山县', 'yc_hs_000023'],
    ['泸溪县', 'yc_hs_000070'],
    ['永顺县', 'yc_hs_000096'],
    ['湘西', 'yc_hs_0005066 '],
    ['全网', 'yc_hs_000023']
  ];
  const value = lists.find(item => item[0] == val);
  return value ? value[1] : '';
}

let aa = Fun('凤凰县')
console.log(aa)