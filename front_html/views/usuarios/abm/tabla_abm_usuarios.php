
				<div class="panel panel-primary contenedor_tabla_abm_usuarios">
					
					<div id="mensaje"></div>
					
					<div class="panel-heading celeste">
						<h3 class="panel-title"> <?php $this->language->translate('TABLA_USUARIOS'); ?> <button class="btn btn-success btn-sm marginLeft30 btn-nuevo"><span class="glyphicon glyphicon-plus-sign"></span> <?php $this->language->translate('BTN_NUEVO'); ?> </button></h3>
						<div class="pull-right">
							<span class="clickable filter" data-toggle="tooltip" title="Buscar" data-container="body">
								<i class="glyphicon glyphicon-filter"></i>
							</span>
						</div>
					</div>
					
					<div class="panel-body">
						<input type="text" id="dev-table-filter" class="form-control"  data-action="filter" data-filters="#tabla_abm_usuarios" placeholder="Buscar Usuarios" />
					</div>
					
					<table id="tabla_abm_usuarios" class="table table-striped table-bordered">
						<thead>
							<tr>
								<th width="1%">#</th>
								<th width="16%">Usuario</th>
								<th width="13%">Tel&eacute;fono</th>
								<th width="10%">Tipo Doc</th>
								<th width="10%">Nro Doc</th>
								<th width="14%">Provincia</th>
								<th width="14%">Localidad</th>
								<th width="7%">Perfil</th>
								<th width="1%">&nbsp;</th>
								<th width="14%">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					
				</div>

