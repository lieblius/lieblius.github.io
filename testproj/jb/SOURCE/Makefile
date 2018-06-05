include $(THEOS)/makefiles/common.mk

APPLICATION_NAME = Respring10
Respring10_FILES = main.m AppDelegate.m
Respring10_FRAMEWORKS = UIKit CoreGraphics

include $(THEOS_MAKE_PATH)/application.mk

after-install::
	install.exec "killall \"Respring10\"" || true
