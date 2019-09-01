

import { Injectable } from '@angular/core';


@Injectable()
export class AppUtilService {


  mapFromArray = <T>(_array: Array<T>, _key: string, isLowercase?: boolean,_efficentIndex?:number) => {
    if (_array == undefined) { return { keyName: new Array<T>() } }; 
    _efficentIndex == undefined?0:_efficentIndex; 
    let _uniqKeyMap ={};
    let _uniquMap = {};
    for (let i = 0; i < _array.length; i++) {
      if (_array[i][_key] !== 'undefined') {
        let _curretnKey = _array[i][_key];
        let _curretnKeyLower = _curretnKey.toLowerCase;
        if (isLowercase) { 
           if (_uniqKeyMap[_curretnKeyLower] == undefined || _uniqKeyMap[_curretnKeyLower]<=_efficentIndex) {
            _uniqKeyMap[_curretnKeyLower] = _uniqKeyMap[_key] == undefined?1:_uniqKeyMap[_curretnKeyLower]+1;
            _uniquMap[_curretnKeyLower] = _array[i];
          }
        } else { 
          if (_uniqKeyMap[_curretnKey] == undefined || _uniqKeyMap[_curretnKey]<=_efficentIndex) {
            _uniqKeyMap[_curretnKey] = _uniqKeyMap[_curretnKey] == undefined?1:_uniqKeyMap[_curretnKey]+1;
            _uniquMap[_curretnKey] = _array[i];
          } 
         
        }
      }
    }
    return _uniquMap;
  };

  arrayFromMap =(_object: Object) =>{
    let returnArray = [];
    for (let key in _object) {
      if (_object.hasOwnProperty(key)) {
        returnArray.push(_object[key]);
      }
    }
    return returnArray;
  }

  groupObjectByKey = <T>(_array: Array<T>, _key: string, isLowercase?: boolean) => {
    if (_array == undefined) { return { keyName: new Array<T>() } };
    let _hash = {};
    for (let i = 0; i < _array.length; i++) {
      if (_array[i][_key] !== 'undefined') {
        if (isLowercase) {
          if (_hash[_array[i][_key].toLowerCase()] == undefined) {
            _hash[_array[i][_key].toLowerCase()] = [];
            _hash[_array[i][_key].toLowerCase()].push(_array[i]);
          }else{
            _hash[_array[i][_key].toLowerCase()].push(_array[i]);
          }
         
        } else {
          if (_hash[_array[i][_key]] == undefined) {
            _hash[_array[i][_key]] = [];
            _hash[_array[i][_key]].push(_array[i]);
          }else{
            _hash[_array[i][_key]].push(_array[i]);
          }
          
         
        }
      }
    }
    return _hash;
  };

}
