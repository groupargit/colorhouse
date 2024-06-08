package com.colorhouse

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import com.facebook.react.ReactInstanceManager;
import com.reactnativettlockupgrade.TtlockUpgradeModule

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ColorHouse"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  // /** permision result */
  // override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
  //   super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  //   val permissionListener = PermissionListenerRegistry.get(requestCode)
  //   permissionListener?.onRequestPermissionsResult(permissions, grantResults)
  // }

  override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    val mReactInstanceManager = reactNativeHost.reactInstanceManager

    //val ttlockModule = mReactInstanceManager.currentReactContext!!.getNativeModule(TtlockUpgradeModule::class.java)
}
}
