<html>
  <head>
    <title><?php echo __('dcReactify');?></title>
  </head>
  <body>
    <?php echo dcPage::breadcrumb(array(html::escapeHTML($core->blog->name) => '', __('dcReactify') => ''));?>
    <?php echo dcPage::notices();?>

    <div class="multi-part" id="relatedlinks_settings" title="<?php echo __('Settings');?>">
      <form action="<?php echo $p_url;?>" method="post" enctype="multipart/form-data">
	<?php if ($dcreactify_active || $is_super_admin):?>
	<div class="fieldset">
	  <h3><?php echo __('Plugin activation');?></h3>
	  <p>
	    <label class="classic" for="dcreactify_active">
	      <?php echo form::checkbox('dcreactify_active', 1, $dcreactify_active);?>
	      <?php echo __('Enable dcReactify plugin');?>
	    </label>
	  </p>
	</div>
	<?php endif;?>

	<p>
	  <input type="submit" name="saveconfig" value="<?php echo __('Save configuration');?>" />
	  <input type="hidden" name="p" value="dcReactify"/>
	  <?php echo $core->formNonce();?>
	</p>
      </form>
    </div>

    <?php if ($dcreactify_active):?>
    <div class="multi-part" id="relatedlinks_settings" title="<?php echo __('Application');?>">
      <div id="app"></div>
      <script src="http://localhost:3000/static/bundle.js"></script>
    </div>
    <?php endif;?>
  </body>
</html>
