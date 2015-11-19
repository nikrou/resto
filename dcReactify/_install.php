<?php
# -- BEGIN LICENSE BLOCK ---------------------------------------
#
# This file is part of Dotclear 2.
#
# Copyright (c) 2003-2015 Olivier Meunier & Association Dotclear
# Licensed under the GPL version 2.0 license.
# See LICENSE file or
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
#
# -- END LICENSE BLOCK -----------------------------------------

$version = $core->plugins->moduleInfo('dcReactify', 'version');
if (version_compare($core->getVersion('dcReactify'), $version,'>=')) {
  return;
}

$settings = $core->blog->settings;
$settings->addNamespace('dcReactify');

$settings->dcReactify->put('active', false, 'boolean', 'dcReactify plugin activated ?', false);

$core->setVersion('dcReactify', $version);
return true;
