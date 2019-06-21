const crypto = require("crypto");
const constants = require('constants');
const fs = require('fs');

/**
 * 随机Hash字符串
 * @param size  长度
 */
exports.randomHash = function(size = 32) {
  if(size <= 0 || size > 40) {
    return '';
  }
  let hash = crypto.createHash('sha1');
  hash.update(new Date().toISOString());
  let ori = hash.digest('base64');
  let str = ori.substring(0, size);
  let result = '';

  for(let i = 0; i < str.length; ++i) {
    let c = str[i];
    if((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))
      result += c;
    else result += randomChar();
  }
  return result;
};

/**
 * sha256 不可逆加密
 * @param str
 * @returns {Array|*}
 */
exports.sha256 = (str) => {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
};

/**
 * sha1 不可逆加密
 * @param str
 * @returns {Array|*}
 */
exports.sha1 = (str) => {
  const hash = crypto.createHash('sha1');
  hash.update(str);
  return hash.digest('hex');
};

/**
 * md5 不可逆加密
 * @param str
 * @returns {Array|*}
 */
exports.md5 = (str) => {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
};

/**
 * AES对称加密
 * @param str        明文
 * @param secret     密钥
 */
exports.encryptAES192 = function(str, secret) {
  let cipher = crypto.createCipher('aes192', secret);
  let enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
};

/**
 * AES对称解密
 * @param str        密文
 * @param secret     密钥
 */
exports.decryptAES192 = function(str, secret) {
  let decipher = crypto.createDecipher('aes192', secret);
  let dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

/**
 * AES256-cbc对称解密
 * @param data        密文
 * @param key     密钥
 * @param iv     密钥
 * @param clearEncoding     编码
 */
exports.decryptAES256CBC = function(data, key, iv, clearEncoding) {
  clearEncoding = clearEncoding || 'utf8';
  let cipherEncoding = 'hex';
  let cipherChunks = [];
  let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  decipher.setAutoPadding(false);
  cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
  cipherChunks.push(decipher.final(clearEncoding));
  return cipherChunks.join('');
};


let randomChar = function() {
  let str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return str[Math.floor(Math.random() * 62)];
};


/**
 * 非对称加密
 */

 var publicKeyPath = 'common/public.pem';
 var privateKeyPath = 'common/private.pem';

 /**
  * 公钥加密
  * @param data        明文
  * @param callback    返回 [err, 密文(base64)]
  */
 exports.publicEncrypt = function (data, callback) {
   var encPub;
   try {
     var publicPem = fs.readFileSync(publicKeyPath);
     //var pubKey = publicPem.toString();
     var pubKey = {
       key: publicPem,
       padding: constants.RSA_PKCS1_PADDING
     };

     encPub = crypto.publicEncrypt(pubKey, new Buffer(data));
   } catch (err) {
     callback(err, null);
     return;
   }
   callback(null, encPub.toString('base64'));
 };


 /**
  * 私钥解密
  * @param enc         公钥加密过的密文(hex)
  * @param callback    [err, 明文(ascii)]
  */
 exports.privateDecrypt = function (enc, callback) {
   var decPri;
   try {
     var privatePem = fs.readFileSync(privateKeyPath);

     var key = {
       key: privatePem,
       padding: constants.RSA_PKCS1_PADDING
     };

     decPri = crypto.privateDecrypt(key, new Buffer(enc, 'base64'));
   } catch (err) {
     callback(err, null);
     return;
   }
   callback(null, decPri.toString('ascii'));
 };


 var Vigenere = {
  _strCpr: 'abcdefghijklmnopqrstuvwxyz_1234567890.ABCDEFGHIJKLMNOPQRSTUVWXYZ',//可以将此字符串的顺序打乱点，或者添加更多字符
  _strKey: function(strK,str){//生成密钥字符串,strK为密钥，str为明文或者密文
      var lenStrK = strK.length;
      var lenStr = str.length;
      if(lenStrK != lenStr){//如果密钥长度与str不同，则需要生成密钥字符串
          if(lenStrK < lenStr){//如果密钥长度比str短，则以不断重复密钥的方式生成密钥字符串
              while(lenStrK < lenStr){
                  strK = strK + strK;
                  lenStrK = 2 * lenStrK;
              }
          }//此时，密钥字符串的长度大于或等于str长度
          strK = strK.substring(0,lenStr);//将密钥字符串截取为与str等长的字符串
      }
      return strK;
  }
}

Vigenere.lenCpr = Vigenere._strCpr.length;
Vigenere.Encrypt = function(K,P){//加密算法，K为密钥，P为明文
  K = Vigenere._strKey(K,P);
  var lenK = K.length;
  var rlt = '';
  var loop = 0;
  for(loop=0; loop<lenK; loop++){
      var iP = Vigenere._strCpr.indexOf(P.charAt(loop));
      if(iP==-1) return '本算法暂时不能对字符：' + P.charAt(loop) + '进行加密';
      var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
      if(iK==-1) return '密钥中包含非法字符：' + K.charAt(loop);
      var i = (iP + iK) % Vigenere.lenCpr;
      rlt = rlt + Vigenere._strCpr.charAt(i);
  }
  return rlt;
};
Vigenere.DisEncrypt = function(K,C){
  K = Vigenere._strKey(K,C);
  var lenK = K.length;
  var rlt = '';
  var loop = 0;
  for(loop=0; loop<lenK; loop++){
      var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
      if(iK==-1) return '密钥中包含非法字符：' + K.charAt(loop);
      var iC = Vigenere._strCpr.indexOf(C.charAt(loop));
      if(iK > iC){
          rlt += Vigenere._strCpr.charAt(iC + Vigenere.lenCpr - iK);
      }
      else{
          rlt += Vigenere._strCpr.charAt(iC - iK);
      }
  }
  return rlt;
};

exports.vigenereEncrypt = (key, str) => {
  return Vigenere.Encrypt(key, str)
}

exports.vigenereDecrypt = (key, enc) => {
  return Vigenere.DisEncrypt(key, enc)
}
