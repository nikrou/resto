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

if (!defined('DC_RC_PATH')) { return; }

$this->registerModule(
	/* Name */			"dcReactify",
	/* Description*/	"Resto for Dotclear",
	/* Author */		"Nicolas",
	/* Version */		'0.1.0',
	/* Permissions */	"admin",
	/* Properties */	array('type' => 'plugin',
							  'dc_min' => '2.8',
							  'support' => 'http://forum.dotclear.net/viewtopic.php?pid=NNNNNN',
							  'details' => 'http://plugins.dotaddict.org/dc2/details/dcReactify'
    )
);
