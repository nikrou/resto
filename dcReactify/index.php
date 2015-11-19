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

if (!defined('DC_CONTEXT_ADMIN')) { exit; }

$core->blog->settings->addNameSpace('dcReactify');
$dcreactify_active = $core->blog->settings->dcReactify->active;
$is_super_admin = $core->auth->isSuperAdmin();

if (!empty($_POST['saveconfig'])) {
    try {
        $dcreactify_active = (empty($_POST['dcreactify_active']))?false:true;
        $core->blog->settings->dcReactify->put('active', $dcreactify_active, 'boolean');

        dcPage::addSuccessNotice(__('Configuration has been updated.'));
        http::redirect($p_url);
    } catch(Exception $e) {
        http::redirect($p_url);
    }
}

include(dirname(__FILE__).'/tpl/index.tpl');
