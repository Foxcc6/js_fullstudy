/**
 * promise 形式  getSetting
 */
export const getSetting=()=>{
    return new Promise((resolve,reject)=>{
      wx.getSetting({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
  /**
   * promise 形式  chooseAddress
   */
  export const chooseAddress=()=>{
    return new Promise((resolve,reject)=>{
      wx.chooseAddress({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
  
  /**
   * promise 形式  openSetting
   */
  export const openSetting=()=>{
    return new Promise((resolve,reject)=>{
      wx.openSetting({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
/* promise形式的shomodal*/
  export const showModal=({content})=>{
    return new Promise((resolve,reject)=>{
      wx.showModal({
        title: '提示',
        content: content,
        success: (res) => {
        resolve(res);
        }
      });
    })
  }

  /* promise形式的shomodal*/
  export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
      wx.showToast({
        title: title,
        icon: 'none',
        duration: 2000
      })
    })
  }