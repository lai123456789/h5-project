

const getUrlVars = function(url) {
  if(url.indexOf("?") <= 0){
    return null;
  }
  var hash;
  var myJson = {};
  var hashes = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    myJson[hash[0]] = hash[1];
  }
  return myJson;
}

const getUrlExCode = function (locationUrl) {
  let datas = getUrlVars(locationUrl);
  let params = "";
  if(datas){
    for(let x in datas){
      let value = datas[x];
      if(!x){
        continue
      }
      if(x == 'code'){
        continue;
      }
      params = params + x + "=" + value + "&";
    }
  }

  let uri = locationUrl;
  if(locationUrl.indexOf("?") > 0){
    uri = locationUrl.substring(0,locationUrl.indexOf("?"));
  }
  let urlParam = uri;
  if(params != ""){
    urlParam = uri + "?" + params;
  }
  return urlParam;
}

export {
  getUrlExCode,
  getUrlVars
}
