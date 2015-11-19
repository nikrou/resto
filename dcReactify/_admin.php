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

if (!defined('DC_CONTEXT_ADMIN')) { return; }

$_menu['System']->addItem(
    'dcReactify',
    'plugin.php?p=dcReactify',
    'index.php?pf=dcReactify/icon.png',
    preg_match('/plugin.php\?p=dcReactify/', $_SERVER['REQUEST_URI']),
    $core->auth->check('admin', $core->blog->id)
);
