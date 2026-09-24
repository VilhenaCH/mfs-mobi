"use strict";

const SEED = {"schools":{"23174960":{"id":"23174960","name":"CEI HELENA PONTES","area":"DISTRITO-SEDE","city":"QUIXERAMOBIM","inep":"23174960"},"22026487":{"id":"22026487","name":"CEJA PROFESSORA MARIA RODRIGUES DAS MERCEDES","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22026487"},"22026495":{"id":"22026495","name":"CEJA PROFESSORA SHIRLEY COSTA E SILVA","area":"19ª GRE - TERESINA","city":"TERESINA","inep":"22026495"},"22035907":{"id":"22035907","name":"CETI CONEGO CARDOSO","area":"05ª GRE - CAMPO MAIOR","city":"CASTELO DO PIAUI","inep":"22035907"},"22045058":{"id":"22045058","name":"CETI COSTA E SILVA","area":"06ª GRE - REGENERAÇÃO","city":"PASSAGEM FRANCA DO PIAUI","inep":"22045058"},"22027432":{"id":"22027432","name":"CETI DEPUTADO ALBERTO MONTEIRO","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22027432"},"22027475":{"id":"22027475","name":"CETI DIDACIO SILVA","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027475"},"22029982":{"id":"22029982","name":"CETI FENELON CASTELO BRANCO","area":"18ª GRE - GRANDE TERESINA","city":"UNIAO","inep":"22029982"},"22019952":{"id":"22019952","name":"CETI FIRMO JOSE DA CUNHA","area":"18ª GRE - GRANDE TERESINA","city":"JOSE DE FREITAS","inep":"22019952"},"22088814":{"id":"22088814","name":"CETI FRANCISCA PEREIRA DE SOUSA MORAIS","area":"16ª GRE - FRONTEIRAS","city":"FRONTEIRAS","inep":"22088814"},"22136703":{"id":"22136703","name":"CETI FRANCISCA TRINDADE","area":"02ª GRE - BARRAS","city":"BARRAS","inep":"22136703"},"22019804":{"id":"22019804","name":"CETI FRANCISCO LUIS DE MORAES","area":"18ª GRE - GRANDE TERESINA","city":"LAGOA DO PIAUI","inep":"22019804"},"22131035":{"id":"22131035","name":"CETI JOÃO BATISTA","area":"03ª GRE - PIRIPIRI","city":"SAO JOAO DA FRONTEIRA","inep":"22131035"},"22021990":{"id":"22021990","name":"CETI JOAO MENDES OLIMPIO DE MELO","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22021990"},"22014535":{"id":"22014535","name":"CETI LIMA REBELO","area":"01ª GRE - PARNAIBA","city":"PARNAIBA","inep":"22014535"},"22027556":{"id":"22027556","name":"CETI MARIA MODESTINA BEZERRA","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027556"},"22132147":{"id":"22132147","name":"CETI MARIANO RABELO DE SEPULVIDA","area":"07ª GRE - VALENÇA","city":"LAGOA DO SITIO","inep":"22132147"},"22095608":{"id":"22095608","name":"CETI MARTINHO VIEIRA","area":"17ª GRE - PAULISTANA","city":"PATOS DO PIAUI","inep":"22095608"},"22003100":{"id":"22003100","name":"CETI MIGUEL ARCOVERDE","area":"03ª GRE - PIRIPIRI","city":"BRASILEIRA","inep":"22003100"},"22027599":{"id":"22027599","name":"CETI NAIR GONCALVES","area":"19ª GRE - TERESINA","city":"TERESINA","inep":"22027599"},"22134840":{"id":"22134840","name":"CETI OLEGARIO AURELIANO DE SOUSA","area":"12ª GRE - SÃO JOÃO DO PIAUÍ","city":"BELA VISTA DO PIAUI","inep":"22134840"},"22015787":{"id":"22015787","name":"CETI OZIAS CORREIA","area":"01ª GRE - PARNAIBA","city":"PARNAIBA","inep":"22015787"},"22129650":{"id":"22129650","name":"CETI PEDRO COELHO DE RESENDE","area":"05ª GRE - CAMPO MAIOR","city":"BOA HORA","inep":"22129650"},"22027297":{"id":"22027297","name":"CETI PROFESSOR  RALDIR CAVALCANTE BASTOS","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027297"},"22135499":{"id":"22135499","name":"CETI PROFESSOR ANTONIO TARCISO PEREIRA E SILVA","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22135499"},"22139923":{"id":"22139923","name":"CETI PROFESSOR FLORESTAN FERNANDES","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22139923"},"22125787":{"id":"22125787","name":"CETI PROFESSOR FRANCISCO LUIS DE OLIVEIRA","area":"05ª GRE - CAMPO MAIOR","city":"JATOBA DO PIAUI","inep":"22125787"},"22027327":{"id":"22027327","name":"CETI PROFESSOR JOCA VIEIRA","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22027327"},"22028455":{"id":"22028455","name":"CETI PROFESSOR JOSE AMAVEL","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22028455"},"22029869":{"id":"22029869","name":"CETI PROFESSORA ELISA SOUSA","area":"18ª GRE - GRANDE TERESINA","city":"UNIAO","inep":"22029869"},"22027777":{"id":"22027777","name":"CETI PROFESSORA JULIA NUNES ALVES","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027777"},"22018220":{"id":"22018220","name":"CETI RAMA BOA","area":"18ª GRE - GRANDE TERESINA","city":"ALTOS","inep":"22018220"},"22095500":{"id":"22095500","name":"CETI REUNIDA DE PATOS","area":"17ª GRE - PAULISTANA","city":"PATOS DO PIAUI","inep":"22095500"},"22022376":{"id":"22022376","name":"CETI ZACARIAS DE GOIS","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22022376"},"22014470":{"id":"22014470","name":"CETI ZULMIRA XAVIER","area":"01ª GRE - PARNAIBA","city":"LUIS CORREIA","inep":"22014470"},"22130659":{"id":"22130659","name":"CMEI ANTOMAR DE CARVALHO GONCALVES","area":"POLO NOVO NILO","city":"UNIAO","inep":"22130659"},"22123067":{"id":"22123067","name":"CMEI MARIA HAYDEE COSTA MEDEIROS","area":"POLO UNIÃO","city":"UNIAO","inep":"22123067"},"22125922":{"id":"22125922","name":"CMEI MINERVINA RODRIGUES CHAVES","area":"POLO BURITI ALEGRE","city":"UNIAO","inep":"22125922"},"23103353":{"id":"23103353","name":"EEF. GAL. WICAR PARENTE DE PAULA PESSOA","area":"DISTRITO-SÃO JOAQUIM","city":"QUIXERAMOBIM","inep":"23103353"},"23103973":{"id":"23103973","name":"EEF. JOSÉ MARINHO DE GÓES","area":"DISTRITO-URUQUÊ","city":"QUIXERAMOBIM","inep":"23103973"},"22006400":{"id":"22006400","name":"EM BERNARDINO GARCIA DO NASCIMENTO","area":"CENTRO-SÃO JOÃO DO ARRAIAL","city":"SAO JOAO DO ARRAIAL","inep":"22006400"},"22250727":{"id":"22250727","name":"EM CLIDENOR DE FREITAS SANTOS","area":"THALITA LIMA SILVA SANTOS","city":"TERESINA","inep":"22250727"},"22028374":{"id":"22028374","name":"EM IOLANDA RAULINO","area":"THALITA LIMA SILVA SANTOS","city":"TERESINA","inep":"22028374"},"22024697":{"id":"22024697","name":"EM MASCARENHAS DE MORAES","area":"TAMIRES TEIXEIRA SANTOS","city":"TERESINA","inep":"22024697"},"22030140":{"id":"22030140","name":"EM MURILO TAVARES DE MELO","area":"POLO DAVID CALDAS","city":"UNIAO","inep":"22030140"},"22024751":{"id":"22024751","name":"EM NOSSA SENHORA DO AMPARO","area":"LUCAS NUNES DE SOUSA","city":"TERESINA","inep":"22024751"},"22028722":{"id":"22028722","name":"EM NOVA BRASILIA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22028722"},"22024905":{"id":"22024905","name":"EM PROFESSORA CRISTINA EVANGELISTA","area":"IVONEIDE MACÊDO SOUSA","city":"TERESINA","inep":"22024905"},"22025090":{"id":"22025090","name":"EM SANTA TERESA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22025090"},"22025030":{"id":"22025030","name":"EM SIMOES FILHO","area":"CINTHIA SILVA COELHO","city":"TERESINA","inep":"22025030"},"22025189":{"id":"22025189","name":"EM VEREADOR VIEIRA TORANGA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22025189"},"22156801":{"id":"22156801","name":"ESCOLA TEC. DE TEATRO PROFESSOR JOSE GOMES CAMPOS","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22156801"},"22134310":{"id":"22134310","name":"U E TENENTE ARAUJO","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22134310"},"22036350":{"id":"22036350","name":"UNIDADE ESCOLAR RAIMUNDO JOAQUIM DOS SANTOS","area":"CENTRO-DOMINGOS MOURAO","city":"DOMINGOS MOURAO","inep":"22036350"}},"months":{"2026-02":{"label":"Fevereiro de 2026","source":"Monitora Fevereiro.html","records":{"23174960":{"s":{"integral":"XGGGGGXXGGGGGXX.....XX.....X"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22026487":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22026495":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22035907":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22045058":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027432":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027475":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22029982":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22019952":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22088814":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22136703":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22019804":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22131035":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22021990":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22014535":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027556":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22132147":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22095608":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22003100":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027599":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22134840":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22015787":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22129650":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027297":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22135499":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22139923":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22125787":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027327":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22028455":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22029869":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027777":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22018220":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22095500":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22022376":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22014470":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22130659":{"s":{"manha":"........GGGGGXX.....XX.....X"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"........GGGGGXX.....XX.....X","tarde":"........GGGGGXX.....XX.....X"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"........GGGGGXX.....XX.....X"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"XGGGGGXXGGGGGXX.....XX.....X","tarde":"XGGGGGXXGGGGGXX.....XX.....X"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XGGGGGXXGGGGGXX.....XX.....X","tarde":"XGGGGGXXGGGGGXX.....XX.....X","integral":"XGGGGGXXGGGGGXX.....XX.....X"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"........GGGGGXX......X.....X"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22028374":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X","noite":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22024697":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22030140":{"s":{"integral":"........GGGGGXX.....XX.....X"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22028722":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22024905":{"s":{"integral":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22025090":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X","noite":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22025030":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X","noite":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22025189":{"s":{"manha":"...GGGXXGGGGGXX.....XX.....X","tarde":"...GGGXXGGGGGXX.....XX.....X"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","17":"Feriados / dias santificados","18":"Não letivo"}},"22156801":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22134310":{"s":{},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22036350":{"s":{},"n":{"14":"Feriados / dias santificados","15":"Feriados / dias santificados","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}}}},"2026-03":{"label":"Março de 2026","source":"Monitora Março.html","records":{"23174960":{"s":{"integral":"XGGGGGXXGGGGXXXG....XX.....XX.."},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","tarde":"XGGGGGGXGGGGGXXG....XX......X..","noite":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22026495":{"s":{"manha":"XRRRRRRXRRRRRXXR....XX......X..","tarde":"XRRRRRRXRRRRRXXR....XX......X..","noite":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22035907":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22045058":{"s":{"noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027432":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","tarde":"XGGGGGGXGGGGGXXG....XX......X..","noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027475":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22029982":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22019952":{"s":{"noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22088814":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22136703":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22019804":{"s":{"manha":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas","19":"Feriado municipal"}},"22131035":{"s":{"noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22021990":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22014535":{"s":{"integral":"XJGJGJJXJJGGJXXJ....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027556":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22132147":{"s":{"noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22095608":{"s":{"noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22003100":{"s":{"noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027599":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22134840":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22015787":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","tarde":"XGGGGGGXGGGGGXXG....XX......X..","noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22129650":{"s":{"noite":"XGGGGGJXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027297":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22135499":{"s":{"noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22139923":{"s":{"manha":"XGGGGGGXGGGGGXXG....XX......X..","noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027327":{"s":{"integral":"XGGGGGJXGGGGGXXG....XX......X.."},"r":{"7":{"integral":"Sábado não letivo"}},"n":{"14":"Reposição de aulas"}},"22028455":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22029869":{"s":{"manha":"XRRRRRRXRRRRRXXR....XX......X..","noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22027777":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22018220":{"s":{"integral":"XGGGGGGXGGGGGGXG....XX......X.."},"n":{"19":"Feriado municipal"}},"22095500":{"s":{"noite":"XRRRRRRXRRRRRXXR....XX......X..","integral":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22022376":{"s":{"integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22014470":{"s":{"noite":"XGGGGGGXGGGGGXXG....XX......X..","integral":"XGGGGGGXGGGGGXXG....XX......X.."},"n":{"14":"Reposição de aulas"}},"22130659":{"s":{"manha":"XGGGGGXXGGGGGGXG....XX.....XX.."}},"22123067":{"s":{"manha":"XGGGGGXXGGGGGGXG....XX.....XX..","tarde":"XGGGGGXXGGGGGGXG....XX.....XX.."}},"22125922":{"s":{"manha":"XGGGGGXXGGGGGGXG....XX.....XX.."}},"23103353":{"s":{"manha":"XGGGGGXXGGGGXXXG....XX.....XX..","tarde":"XGGGGGXXGGGGXXXG....XX.....XX.."},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XGGGGGXXGGGGXXXG....XX.....XX..","tarde":"XGGGGGXXGGGGXXXG....XX.....XX..","integral":"XGGGGGXXGGGGXXXG....XX.....XX.."},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XGGGGGXXGGGGGJXG....XX......X.."},"r":{"14":{"integral":"Ponto Facultativo"}}},"22250727":{"s":{"integral":"XGGJJJXXGGGGGXXG....XX.....XX.."},"r":{"4":{"integral":"Óbito"},"5":{"integral":"Óbito"},"6":{"integral":"Óbito"}}},"22028374":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX..","noite":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22024697":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22030140":{"s":{"integral":"XGGGGGXXGGGGGGXG....XX.....XX.."}},"22024751":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22028722":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22024905":{"s":{"integral":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22025090":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX..","noite":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22025030":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX..","noite":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22025189":{"s":{"manha":"XGGGGGXXGGGGGXXG....XX.....XX..","tarde":"XGGGGGXXGGGGGXXG....XX.....XX.."}},"22156801":{"s":{"tarde":"XRRRRRRXRRRRRXXR....XX......X..","noite":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22134310":{"s":{"manha":"XRRRRRRXRRRRRXXR....XX......X.."},"n":{"14":"Reposição de aulas"}},"22036350":{"s":{"manha":"XGGGGGJXGGGGGXXG....XX......X..","tarde":"XGGGGGJXGGGGGXXG....XX......X.."},"r":{"7":{"manha":"Sábado não letivo","tarde":"Sábado não letivo"}}}}},"2026-04":{"label":"Abril de 2026","source":"Monitora Abril.html","records":{"23174960":{"s":{"integral":"GXXXXGGGGGXXGGX..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","15":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","tarde":"GXXXXGGGGGGXGGG..XX.....XX....","noite":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22026495":{"s":{"manha":"RXXXXRRRRRRXRRR..XX.....XX....","tarde":"GXXXXGGGGGGXRRR..XX.....XX....","noite":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22035907":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22045058":{"s":{"noite":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados","29":"Feriado municipal","30":"Feriado municipal"}},"22027432":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","tarde":"GXXXXGGGGGGXGGG..XX.....XX....","noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027475":{"s":{"integral":"JXXXXGGGGGGXGGG..XX.....XX...."},"r":{"1":{"integral":"Feriados / dias santificados"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22029982":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22019952":{"s":{"noite":"RXXXXRXRRRRXRRR..XX......X....","integral":"RXXXXRXRRRRXRRR..XX......X...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","7":"Feriado municipal","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22088814":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22136703":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22019804":{"s":{"manha":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"RXXXXRRRRRRXRRR..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22131035":{"s":{"noite":"GXXXXGGGGGJXGGG..XX.....XX....","integral":"GXXXXGGGGGJXGGG..XX.....XX...."},"r":{"11":{"noite":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22021990":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22014535":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027556":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22132147":{"s":{"noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22095608":{"s":{"noite":"RXXXXRRRRRRXRRR..XX......X....","integral":"RXXXXRRRRRRXRRR..XX......X...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados","29":"Feriados / dias santificados"}},"22003100":{"s":{"noite":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"RXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027599":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22134840":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22015787":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","tarde":"GXXXXGGGGGGXGGG..XX.....XX....","noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22129650":{"s":{"noite":"XXXXXGGGGGGXGGG..XX.....XX....","integral":"XXXXXGGGGGGXGGG..XX.....XX...."},"n":{"1":"Feriado municipal","2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027297":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22135499":{"s":{"noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22139923":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGRRGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22125787":{"s":{"tarde":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"RXXXXRRRRRRXRRR..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027327":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22028455":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22029869":{"s":{"manha":"RXXXXRRRRRRXRRR..XX.....XX....","noite":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"RXXXXRRRRRRXRRR..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22027777":{"s":{"integral":"GXXXXGGGGGJXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22018220":{"s":{"integral":"JXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22095500":{"s":{"noite":"RXXXXRRRRRRXRRR..XX.....XX....","integral":"GXXXXRGGGGRXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22022376":{"s":{"integral":"GXXXXGGGGGJXGGG..XX.....XX...."},"r":{"11":{"integral":"Falta de funcionário"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22014470":{"s":{"noite":"GXXXXGGGGGGXGGG..XX.....XX....","integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22130659":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX....","tarde":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"GXXXXGGGGGXXGGX..XX.....XX....","tarde":"GXXXXGGGGGXXGGX..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"GXXXXGGGGGXXGGX..XX.....XX....","tarde":"GXXXXGGGGGXXGGX..XX.....XX....","integral":"GXXXXGGGGGXXGGX..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","15":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XXXXXGGGGGXXGGG..XX......X...."},"n":{"1":"Feriados / dias santificados","2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","20":"Não letivo","21":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX....","noite":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","20":"Não letivo","21":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"GXXXXGGGGGGXGGG..XX.....XX...."},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX....","noite":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","20":"Não letivo","21":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX....","noite":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","20":"Não letivo","21":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"GXXXXGGGGGXXGGG..XX.....XX....","tarde":"GXXXXGGGGGXXGGG..XX.....XX...."},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"RXXXXRRRRRRXRRR..XX.....XX....","noite":"RXXXXRRRRRRXRRR..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22134310":{"s":{"manha":"RXXXXRRRRRRXRRR..XX.....XX...."},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","18":"Reposição de aulas","21":"Feriados / dias santificados"}},"22036350":{"s":{"manha":"XXXXXGGGGGGXGGG..XX......X....","tarde":"XXXXXGGGGGGXGGG..XX......X...."},"n":{"1":"Encontro pedagógico","2":"Feriados / dias santificados","3":"Feriados / dias santificados","4":"Feriados / dias santificados","21":"Feriados / dias santificados"}}}},"2026-05":{"label":"Maio de 2026","source":"Monitora Maio.html","records":{"23174960":{"s":{"integral":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGGXGGGGGXX.....XX.....XX","noite":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22026495":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","tarde":"XXXRRRRRRXRRRRRXX.....XX.....XX","noite":"XXXRRRRRRXRRRGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22035907":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22045058":{"s":{"noite":"XXXRRRRRRXRRRRRXX......X.....XX","integral":"XXXGGGGGGXGGGGGXX......X.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027432":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGGXGGGGGXX.....XX.....XX","noite":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027475":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22029982":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22019952":{"s":{"noite":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22088814":{"s":{"integral":"XXXRGGGGGXGGXGGXX......X.....XX"},"n":{"1":"Feriados / dias santificados","13":"Feriado municipal","16":"Reposição de aulas"}},"22136703":{"s":{"integral":"XXXGGGGGGXGGGGJXX.....XX.....XX"},"r":{"15":{"integral":"formação de professores"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22019804":{"s":{"manha":"XXXRRRRRRXRRRRRXX......X.....XX","integral":"XXXRRRRRRXRRRRRXX......X.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22131035":{"s":{"noite":"XXXGGGGGJXGGGGGXX.....XX.....XX","integral":"XXXGGGGGJXGJGGGXX.....XX.....XX"},"r":{"9":{"noite":"Sábado não letivo","integral":"Sábado não letivo"},"12":{"integral":"Sábado não letivo"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22021990":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22014535":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX......X"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027556":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22132147":{"s":{"noite":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22095608":{"s":{"noite":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22003100":{"s":{"noite":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027599":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22134840":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22015787":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX......X","tarde":"XXXGGGGGGXGGGGGXX.....XX......X","noite":"XXXGGGGGGXGGGGGXX.....XX......X","integral":"XXXGGGGGGXGGGGGXX.....XX......X"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22129650":{"s":{"noite":"XXXGGGGGRXGGGGGXX......X.....XX","integral":"XXXGGGGGGXGGGGJXX......X.....XX"},"r":{"15":{"integral":"Causas Naturais"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027297":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22135499":{"s":{"noite":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22139923":{"s":{"manha":"XXXGGGGGGXGGGGGXX.....XX.....XX","noite":"XXXGGGGGGXGGGGGXX.....XX.....XX","integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027327":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22028455":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22029869":{"s":{"manha":"XXXRRRRRRXRRRRRXX.....XX.....XX","noite":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027777":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22018220":{"s":{"integral":"XXXGGGGGGXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22095500":{"s":{"noite":"XXXRRRRRRXRRRRRXX.....XX.....XX","integral":"XXXGGGGRRXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22022376":{"s":{"integral":"XXXGGGGGJXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22014470":{"s":{"noite":"XXXGGGGGGXGGGJJXX.....XX.....XX","integral":"XXXGGGGGGXGGGJJXX.....XX.....XX"},"r":{"14":{"noite":"Manutenção Predial","integral":"Manutenção Predial"},"15":{"noite":"Manutenção Predial","integral":"Manutenção Predial"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22130659":{"s":{"manha":"XXXGGGGGXXGGGGGGX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22123067":{"s":{"manha":"XXXGGGGGXXGGGGGGX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGGX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22125922":{"s":{"manha":"XXXGGGGGXXGGGGGGX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"23103353":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX","integral":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XXXGGGGGJXGGGGGXX.....XX......X"},"r":{"9":{"integral":"Ponto Facultativo"}},"n":{"1":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX","noite":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"XXXGGGGGXXGGGGGGX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22024751":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX","noite":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX","noite":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"XXXGGGGGXXGGGGGXX.....XX.....XX","tarde":"XXXGGGGGXXGGGGGXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"XXXRRRRRRXRRRRRXX.....XX.....XX","noite":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22134310":{"s":{"manha":"XXXRRRRRRXRRRRRXX.....XX.....XX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22036350":{"s":{"manha":"XXXGGXGGGXGGGGGXX.....XX......X","tarde":"XXXGGXGGGXGGGGGXX.....XX......X"},"n":{"1":"Feriados / dias santificados","6":"Encontro pedagógico"}}}},"2026-06":{"label":"Junho de 2026","source":"Monitora Junho.html","records":{"23174960":{"s":{"integral":"GGGXGXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","tarde":"GGGXGXXGGGGGXXG....XX......X..","noite":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22026495":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","tarde":"GGGXGXXGGGGGXXG....XX......X..","noite":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22035907":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22045058":{"s":{"noite":"GGGXGXXGGGGGGXG....XX......X..","integral":"GGGXGXXGGGGGGXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027432":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","tarde":"GGGXGXXGGGGGXXG....XX......X..","noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027475":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22029982":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22019952":{"s":{"noite":"RRRXRXXRRRRRXXR....XX......X..","integral":"RRRXRXXRRRRRXXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22088814":{"s":{"integral":"GGGXGGXGXXGGGXG....XX......X.."},"n":{"4":"Feriados / dias santificados","9":"Feriado municipal","10":"Feriado municipal","20":"Reposição de aulas"}},"22136703":{"s":{"integral":"GGGXGJXGGGGGXXG....XX......X.."},"r":{"6":{"integral":"formação de professores"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22019804":{"s":{"manha":"RRRXRXXRRRRRXXR....XX......X..","integral":"RRRXRXXRRRRRXXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22131035":{"s":{"noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22021990":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22014535":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027556":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22132147":{"s":{"noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22095608":{"s":{"noite":"RRRXRXXRRRRRXXR....XX......X..","integral":"RRRXRXXRRRRRXXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22003100":{"s":{"noite":"RRRXRXXRRRRRXXR....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027599":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22134840":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22015787":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","tarde":"GGGXGXXGGGGGXXG....XX......X..","noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22129650":{"s":{"noite":"GGGXGRXGGGGGXXG....XX......X..","integral":"GGGXGRXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas","29":"Feriado municipal"}},"22027297":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22135499":{"s":{"noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22139923":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22125787":{"s":{"tarde":"RRRXRXXRRRRRXXR....XX......X..","integral":"RRRXRXXRRRRRXXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027327":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22028455":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22029869":{"s":{"manha":"RRRXRXXRRRRRRXR....XX......X..","noite":"RRRXRXXRRRRRRXR....XX......X..","integral":"RRRXRXXRRRRRRXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas","29":"Feriado municipal"}},"22027777":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22018220":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22095500":{"s":{"noite":"RRRXRXXRRRRRXXR....XX......X..","integral":"RRRXRXXRRGGGXXJ....XX......X.."},"r":{"15":{"integral":"Atividade pedagógica"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22022376":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22014470":{"s":{"noite":"GGGXGXXGGGGGXXG....XX......X..","integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas","29":"Feriados / dias santificados"}},"22130659":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X..","tarde":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"GGGXGXXGGGGGXXG....XX.....XX..","tarde":"GGGXGXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"GGGXGXXGGGGGXXG....XX.....XX..","tarde":"GGGXGXXGGGGGXXG....XX.....XX..","integral":"GGGXGXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"GGGXGXXGGGGGRXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Sábado de reposição","24":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22028374":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX..","noite":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22024697":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22030140":{"s":{"integral":"GGGXGXXGGGGGXXG....XX......X.."},"n":{"4":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22028722":{"s":{"manha":"GGGXGXXGGGGGXXG....XX.....XX..","tarde":"GGGXGXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025090":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX..","noite":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025030":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX..","noite":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025189":{"s":{"manha":"GGGXXXXGGGGGXXG....XX.....XX..","tarde":"GGGXXXXGGGGGXXG....XX.....XX.."},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22156801":{"s":{"tarde":"RRRXRXXRRRRRXXR....XX......X..","noite":"RRRXRXXRRRRRXXR....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22134310":{"s":{"manha":"GRRXRXXRRRGRXXG....XX......X.."},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22036350":{"s":{"manha":"GGGXXXXGGGGGXXX....XX......X..","tarde":"GGGXXXXGGGGGXXX....XX......X.."},"n":{"4":"Feriados / dias santificados","5":"Feriados / dias santificados","15":"Encontro pedagógico"}}}},"2026-07":{"label":"Julho de 2026","source":"Monitora Julho.html","records":{"23174960":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22026487":{"s":{"manha":"GGGXXRGGGGX....................","tarde":"GGGXXGGGGGX....................","noite":"GGGXXGGGGGX...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22026495":{"s":{"manha":"GGGGXGG........................","tarde":"GGGGXGG........................","noite":"GGGGXGG........................"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22035907":{"s":{"integral":"GGGXXGGGGGJ...................."},"r":{"11":{"integral":"Atividade pedagógica"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22045058":{"s":{"noite":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027432":{"s":{"manha":"GGGGXGGGGGG....................","tarde":"GGGGXGGGGGG....................","noite":"GGGJXGGGGGJ....................","integral":"GGGJXGGGGGG...................."},"r":{"4":{"noite":"Sábado não letivo","integral":"Sábado não letivo"},"11":{"noite":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027475":{"s":{"integral":"GGGXXGGGGGJ...................."},"r":{"11":{"integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22029982":{"s":{"integral":"GGGXXGGGGGJ...................."},"r":{"11":{"integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22019952":{"s":{"noite":"RRRRXRRRRRR....................","integral":"RRRRXRRRRRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22088814":{"s":{"integral":"GGGXXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22136703":{"s":{"integral":"JGGXXGGGGGG...................."},"r":{"1":{"integral":"Sem Energia"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22019804":{"s":{"manha":"RRRXXRRRRRR....................","integral":"RRRXXRRRRRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22131035":{"s":{"noite":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22021990":{"s":{"integral":"GGGXXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22014535":{"s":{"integral":"GGGXXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027556":{"s":{"integral":"GGGXXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22132147":{"s":{"noite":"GGGGXGRRRRR....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22095608":{"s":{"noite":"RRRRXRRRRRR....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22003100":{"s":{"noite":"RRRRXRRRRRR....................","integral":"GJJGXGGGGGJ...................."},"r":{"2":{"integral":"Atividade Externa"},"3":{"integral":"Atividade Externa"},"11":{"integral":"Atividade Externa"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico","31":"Feriado municipal"}},"22027599":{"s":{"manha":"GGGXXGGGGGJ....................","integral":"GGGXXGGGGGJ...................."},"r":{"11":{"manha":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22134840":{"s":{"manha":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22015787":{"s":{"manha":"GGGGXGGGGGG....................","tarde":"GGGGXGGGGGG....................","noite":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22129650":{"s":{"noite":"GGGRXGGGGGR....................","integral":"GGGRXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027297":{"s":{"integral":"GGGXXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22135499":{"s":{"noite":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22139923":{"s":{"manha":"GGGGXGGGGGG....................","noite":"GGGGXGGGGGG....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22125787":{"s":{"tarde":"RRRRXRRRRRR....................","integral":"RRRRXRRRRRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027327":{"s":{"integral":"GGGXXGGJGGR...................."},"r":{"8":{"integral":"Atividade Interna"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22028455":{"s":{"integral":"GGGXXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22029869":{"s":{"manha":"RRRRXRRRRRR....................","noite":"RRRRXRRRRRR....................","integral":"RRRRXRRRRRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027777":{"s":{"integral":"GGRXXGGGGGJ...................."},"r":{"11":{"integral":"Atividade pedagógica"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22018220":{"s":{"integral":"GGGXXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22095500":{"s":{"noite":"RRRRXRRRRRR....................","integral":"GGRRXGGGGGR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22022376":{"s":{"integral":"GGJXXGGGGGJ...................."},"r":{"3":{"integral":"Atividade Interna"},"11":{"integral":"Atividade Interna"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22014470":{"s":{"noite":"GGGGXGRRRRR....................","integral":"GGGGXGGGGGG...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22130659":{"s":{"manha":"GGGXXGGGGGGXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22123067":{"s":{"manha":"GGGXXGGGGGRXGGGG...............","tarde":"GGGXXGGGGGRXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22125922":{"s":{"manha":"GGGXXGGGGGGXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"23103353":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"23103973":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22006400":{"s":{"integral":"GGGXXGGGGGGXGGG................"},"n":{"16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22250727":{"s":{"integral":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22028374":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXGGGG...............","noite":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024697":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22030140":{"s":{"integral":"GGGXXGGGGGRXGGGR..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024751":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXRGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22028722":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024905":{"s":{"integral":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025090":{"s":{"manha":"RGGXXGGGGGXXGGGG...............","tarde":"RGGXXGGGGGXXGGGG...............","noite":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025030":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXGGGG...............","noite":"GGGXXGGGGGXXGGGR..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025189":{"s":{"manha":"GGGXXGGGGGXXGGGG...............","tarde":"GGGXXGGGGGXXGGGG..............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22156801":{"s":{"tarde":"RRRXXRRRRRR....................","noite":"RRRXXRRRRRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22134310":{"s":{"manha":"GGGXXRGGGRR...................."},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22036350":{"s":{"manha":"JGGG.....................X.....","tarde":"JGGG.....................X....."},"r":{"1":{"manha":"Atividade Externa","tarde":"Atividade Externa"}},"n":{"6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Feriados / dias santificados","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas"}}}},"2026-08":{"label":"Agosto de 2026","source":"Monitora Agosto.html","records":{"23174960":{"s":{"integral":"..GGRRRXXRRRRXXX.....XX.....XX."},"n":{"14":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XXGGGGGXXGGGGGGX.....XX......X.","tarde":"XXGGGGGXXGGGGGGX.....XX......X.","noite":"XXGGGGGXXGGGGGGX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22026495":{"s":{"manha":"XXGGGGGXXGGGGGGX.....XX......X.","tarde":"XXGGGGGXXGGGGGGX.....XX......X.","noite":"XXGGGGGXXGGGGGGX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22035907":{"s":{"integral":"XXGGGGGXXGGGGGGX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22045058":{"s":{"noite":"XXGGGGGXXGGGGGGX.....XX......X.","integral":"XXGGGGGXXGGGGGJX.....XX......X."},"r":{"15":{"integral":"Acolhimento aos desabrigados da região"}},"n":{"22":"Reposição de aulas"}},"22027432":{"s":{"manha":"XXGGGGGXXGGGGGJX.....XX......X.","tarde":"XXGGGGGXXGGGGGJX.....XX......X.","noite":"XXGGGGGXXGGGGGJX.....XX......X.","integral":"XXGGGGGXXGGGGGJX.....XX......X."},"r":{"15":{"manha":"Sábado não letivo","tarde":"Sábado não letivo","noite":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"22":"Reposição de aulas"}},"22027475":{"s":{"integral":"XXGGGGGXXGGGGGJX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22029982":{"s":{"integral":"XXGGGGGXXGGGGGJX.....XX.....XX."},"n":{"15":"Reposição de aulas","31":"Feriado municipal"}},"22019952":{"s":{"noite":"XXRRRRRXXRRRRRRX.....XX.....XX.","integral":"XXRRRRRXXRRRRRRX.....XX.....XX."},"n":{"22":"Reposição de aulas"}},"22088814":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22136703":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22019804":{"s":{"manha":"XXGGGGGXXGGGGGGX.....XX.....XX.","integral":"XXGGGGGXXGGGGGGX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22131035":{"s":{"noite":"XXGGGGGXXGGGGGRX.....XX......X.","integral":"XXGGGGGXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22021990":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22014535":{"s":{"integral":"XXGGGGGRXGGGGXXX.....XX......X."},"n":{"14":"Feriado municipal","15":"Reposição de aulas"}},"22027556":{"s":{"integral":"XXGGGGGXXGGGGGGX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22132147":{"s":{"noite":"XXGGGRRXXRRRRRRX.....XX......X.","integral":"XXGGGRRXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22095608":{"s":{"noite":"XXRRRRRXXRRRJJRX.....XX......X.","integral":"XXGGJGGXXGGGGGGX.....XX......X."},"r":{"5":{"integral":"Atividade Interna"},"13":{"noite":"Atividade Interna"},"14":{"noite":"Atividade Interna"}},"n":{"22":"Reposição de aulas"}},"22003100":{"s":{"noite":"XXRRRRRXXRRRRRRX.....XX......X.","integral":"XXGGGGGXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22027599":{"s":{"manha":"XXGGGGGXXGGGGGRX.....XX.....XX.","integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22134840":{"s":{"manha":"XXGGGGGXXGGGGGJX.....XX......X.","integral":"XXGGGGGXXGGGGGJX.....XX......X."},"r":{"15":{"manha":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"22":"Reposição de aulas"}},"22015787":{"s":{"manha":"XXGGGGGXXGGGGRRX.....XX......X.","tarde":"XXGGGGGXXGGGGRRX.....XX......X.","noite":"XXGGGGGXXGGGGRRX.....XX......X.","integral":"XXGGGGGXXGGGGRRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22129650":{"s":{"noite":"XXGGGGGXXGGGGGRX.....XX......X.","integral":"XXGGGGGXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22027297":{"s":{"integral":"XXGGGGGXXGGGGGJX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22135499":{"s":{"noite":"XXGGGGGXXGGGGGGX.....XX......X.","integral":"XXGGGGGXXGGGGGGX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22139923":{"s":{"manha":"XXGGGGGXXGGGGGRX.....XX......X.","noite":"XXRRRRRXXRRRRRRX.....XX......X.","integral":"XXGGGGGXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XXRRRRRXXRRRRRRX.....XX......X.","integral":"XXRRRRRXXRRRRRRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22027327":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22028455":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22029869":{"s":{"manha":"XXRRRRRRXRRRRRRX.....XX.....XX.","noite":"XXRRRRRRXRRRRRRX.....XX.....XX.","integral":"XXRRRRRRXRRRRRRX.....XX.....XX."},"n":{"22":"Reposição de aulas","29":"Feriado municipal","31":"Feriado municipal"}},"22027777":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22018220":{"s":{"integral":"XXGGGRGXXRGGRRRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22095500":{"s":{"noite":"XXRRRRRXXRRRRRRX.....XX......X.","integral":"XXRGRRGXXRRRRRRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22022376":{"s":{"integral":"XXGGGGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22014470":{"s":{"noite":"XXRGRRRXXGGRRRRX.....XX......X.","integral":"XXGGGGGXXGGGGGRX.....XX......X."},"n":{"22":"Reposição de aulas"}},"22130659":{"s":{"manha":"...GGGGXXGGGGGGX.....XX.....XX."},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"...GGGGXXGGGRGRX.....XX.....XX.","tarde":"...GGGGXXGGGGGRX.....XX.....XX."},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"...GGGGXXGGGGGRX.....XX.....XX."},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"..GGRRRXXRRRRXXX.....XX.....XX.","tarde":"..GGRRRXXRRRRXXX.....XX.....XX."},"n":{"14":"Feriados / dias santificados","15":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"..GGRRRXXRRRRXXX.....XX.....XX.","tarde":"..GGRRRXXRRRRXXX.....XX.....XX.","integral":"..GRRRRXXRRRRXXX.....XX.....XX."},"n":{"14":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"..GGGGGRXGGGGGXX.....XX......X."}},"22250727":{"s":{"integral":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22028374":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX.","noite":"....RGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22024697":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22030140":{"s":{"integral":"...GGGGXXGGGGGRX.....XX.....XX."},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22028722":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22024905":{"s":{"integral":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025090":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX.","noite":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025030":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX.","noite":"....RRRXXGGRRRXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025189":{"s":{"manha":"....GGGXXGGGGGXX.....XX.....XX.","tarde":"....GGGXXGGGGGXX.....XX.....XX."},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22156801":{"s":{"tarde":"XXRRRRRXXRRRRRRX.....XX.....XX.","noite":"XXRRRRRXXRRRRRRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22134310":{"s":{"manha":"XXGGRGGXXGGGGGRX.....XX.....XX."},"n":{"15":"Reposição de aulas"}},"22036350":{"s":{"manha":"XXGGGGGXXGGGGGGX.....XX.....XX.","tarde":"XXGGGGGXXGGGGGGX.....XX.....XX."}}}},"2026-09":{"label":"Setembro de 2026","source":"Monitora setembro.html","records":{"23174960":{"s":{"integral":"RRRRXXXRRRRXXRR...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GGGGXXXGGGGGXGG...XX..........","tarde":"GGGGXXXGGGGGXGG...XX..........","noite":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22026495":{"s":{"manha":"GGGGXXXGGGGGXGG...XX..........","tarde":"GGGGXXXGGGGGXGG...XX..........","noite":"GGGGXXXGGGGGXGR...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22035907":{"s":{"integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22045058":{"s":{"noite":"GGGGXXXGGGGGXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027432":{"s":{"manha":"GGGGXXXGGGGGXGG...XX..........","tarde":"GJGGXXXGGGGGXGG...XX..........","noite":"GGGGXXXGGGGRXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"r":{"2":{"tarde":"Sem Água"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027475":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22029982":{"s":{"integral":"GGGGXXXGGGGRXRR...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriado municipal","19":"Reposição de aulas"}},"22019952":{"s":{"noite":"GGGGXXXGGGGRXGG...XX..........","integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22088814":{"s":{"integral":"GGGGXXXXGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","8":"Feriado municipal","19":"Reposição de aulas"}},"22136703":{"s":{"integral":"GGGJXXXGGJGRXGG...XX.........."},"r":{"4":{"integral":"Atividade Externa"},"10":{"integral":"Atividade Externa"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas","24":"Feriado municipal"}},"22019804":{"s":{"manha":"GGGGXXXGGGGGXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22131035":{"s":{"noite":"GGGGXXXGGGGRXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22021990":{"s":{"integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22014535":{"s":{"integral":"GGGGXXXXGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","8":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027556":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22132147":{"s":{"noite":"GRGGXXXGRRGRXRR...XX..........","integral":"GGRGXXXGGGGRXGR...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22095608":{"s":{"noite":"RJRRXXXRRRRRXRR...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"r":{"2":{"noite":"Aula Remota"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22003100":{"s":{"noite":"RRRRXXXRRRRRXRR...XX..........","integral":"GGGGXXXGRGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027599":{"s":{"manha":"GGGGXXXGGGGRXGG...XX..........","integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22134840":{"s":{"manha":"GGGGXXXGGGGGXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22015787":{"s":{"manha":"GGGGXXXXGGGRXGG...XX..........","tarde":"GGGGXXXXGGGRXGG...XX..........","noite":"GGGRXXXXGGRRXGG...XX..........","integral":"GGGGXXXXGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","8":"Feriados / dias santificados","19":"Reposição de aulas"}},"22129650":{"s":{"noite":"RRRRXXXRRRRRXRR...XX..........","integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027297":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22135499":{"s":{"noite":"GGRGXXXGGGGGXGG...XX..........","integral":"GGGGXXXGGGGGXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22139923":{"s":{"manha":"GGGGXXXGGGGRXGG...XX..........","noite":"RRRRXXXRRRRRXRR...XX..........","integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22125787":{"s":{"tarde":"RRRRXXXRRRRRXRR...XX..........","integral":"RRRRXXXRRRRRXRR...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027327":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22028455":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22029869":{"s":{"manha":"RRRRRXXRRRRRXRR...XX..........","noite":"RRRRRXXRRRRRXRR...XX..........","integral":"RRRRRXXRRRRRXRR...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriado municipal","19":"Reposição de aulas"}},"22027777":{"s":{"integral":"GGGGXXXGRGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22018220":{"s":{"integral":"GGGGXXXRGRGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22095500":{"s":{"noite":"RRRRXXXRRRRRXRR...XX..........","integral":"RRRRXXXRRRGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22022376":{"s":{"integral":"GGGGXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22014470":{"s":{"noite":"RRGRXXXGRRRRXRR...XX..........","integral":"GGGRXXXGGGGRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22130659":{"s":{"manha":"GGGGGXXGGGGXXGR...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GGGGRXXGGGGXXGG...XX..........","tarde":"GGGGRXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GGGRRXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"RRRRXXXRRRRXXRR...XX..........","tarde":"RRRRXXXRRRRXXRR...XX.........."},"n":{"7":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"RRRRXXXRRRRXXRR...XX..........","tarde":"RRRRXXXRRRRXXRR...XX..........","integral":"RRRRXXXRRRRXXRR...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"GGGGRXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados","26":"Sábado de reposição"}},"22250727":{"s":{"integral":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"GGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX..........","noite":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"GGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"GGGGRXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GGGGXXXGGRGXXGG...XX..........","tarde":"GGGRXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"GGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"GGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX..........","noite":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"RGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX..........","noite":"GGGRXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"GGGGXXXGGGGXXGG...XX..........","tarde":"GGGGXXXGGGGXXGG...XX.........."},"n":{"7":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"RRRRXXXRRRRRXRR...XX..........","noite":"RRRRXXXRRRRRXRR...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22134310":{"s":{"manha":"GGGRXXXGGGRRXGG...XX.........."},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22036350":{"s":{"manha":"GGGXXXXGGGGRXGG...XX..........","tarde":"GGGXXXXGGGGGXGG...XX.........."},"n":{"4":"Encontro pedagógico","7":"Feriados / dias santificados"}}}}}};
const STORAGE_KEY = "frequencia.monitora.imports.v2";
const DAILY_STORAGE_KEY = "frequencia.csv.daily.v1";

const SHIFT_LABELS = {
  manha: "Manhã",
  tarde: "Tarde",
  noite: "Noite",
  integral: "Integral"
};
const SHIFT_CODES = { M: "manha", T: "tarde", N: "noite", I: "integral" };
const SHIFT_ORDER = ["manha", "tarde", "noite", "integral"];
const STATUS_INFO = {
  G: { key: "enviada", label: "Com frequência", cls: "sent", short: "OK" },
  R: { key: "pendente", label: "Pendente", cls: "pending", short: "!" },
  J: { key: "justificada", label: "Justificada", cls: "justified", short: "J" },
  X: { key: "nao_letivo", label: "Não letivo", cls: "no-school", short: "–" },
  ".": { key: "sem_registro", label: "Sem registro", cls: "blank", short: "" },
  "?": { key: "desconhecido", label: "Desconhecido", cls: "blank", short: "?" }
};
const STATUS_CHAR = { enviada: "G", pendente: "R", justificada: "J", nao_letivo: "X", sem_registro: "." };
const COLOR_CHAR = {
  "rgb(0,169,157)": "G",
  "rgb(244,34,34)": "R",
  "rgb(247,149,34)": "J",
  "rgb(100,112,121)": "X"
};
const MONTH_NAMES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const MONTH_INDEX = {
  janeiro: 1, fevereiro: 2, marco: 3, abril: 4, maio: 5, junho: 6,
  julho: 7, agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12
};

const state = {
  month: "2026-09",
  search: "",
  shift: "TODOS",
  status: "TODOS",
  preview: null,
  dailyPreview: null,
  chargeGroups: []
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[c]));
}

function readOverrides() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}

function writeOverrides(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function allMonths() {
  const overrides = readOverrides();
  return [...new Set([...Object.keys(SEED.months), ...Object.keys(overrides)])].sort();
}

function currentBundle(month = state.month) {
  const base = SEED.months[month] || { label: monthLabel(month), source: "", records: {} };
  const overrides = readOverrides();
  const over = overrides[month] || { records: {}, schoolsMeta: {} };
  return {
    month,
    label: base.label || monthLabel(month),
    source: over.fileName || base.source || "",
    importedAt: over.importedAt || null,
    dailyImportedAt: over.dailyImportedAt || null,
    dailyFileName: over.dailyFileName || "",
    records: { ...(base.records || {}), ...(over.records || {}) },
    schools: { ...SEED.schools, ...(over.schoolsMeta || {}) }
  };
}

function monthLabel(month) {
  const [year, mo] = month.split("-").map(Number);
  return `${MONTH_NAMES[mo - 1]} de ${year}`;
}

function daysInMonth(month) {
  const [year, mo] = month.split("-").map(Number);
  return new Date(year, mo, 0).getDate();
}

function statusChar(record, shift, day) {
  const str = record?.s?.[shift] || "";
  return str[day - 1] || ".";
}

function recordShifts(record) {
  return SHIFT_ORDER.filter(shift => record?.s?.[shift]);
}

function countStatuses(records, shiftFilter = "TODOS") {
  const counts = { G: 0, R: 0, J: 0, X: 0, ".": 0 };
  Object.values(records).forEach(record => {
    const shifts = shiftFilter === "TODOS" ? recordShifts(record) : [shiftFilter].filter(s => record?.s?.[s]);
    shifts.forEach(shift => {
      for (const ch of record.s[shift]) counts[ch] = (counts[ch] || 0) + 1;
    });
  });
  return counts;
}

function latestDataDay(records, month) {
  const max = daysInMonth(month);
  for (let day = max; day >= 1; day--) {
    for (const record of Object.values(records)) {
      for (const shift of recordShifts(record)) {
        const ch = statusChar(record, shift, day);
        if (ch === "G" || ch === "R" || ch === "J") return day;
      }
    }
  }
  return null;
}

function renderMonthSelect() {
  const select = $("#monthSelect");
  const months = allMonths();
  if (!months.includes(state.month)) state.month = months[months.length - 1] || "2026-09";
  select.innerHTML = months.slice().reverse().map(m => `<option value="${m}" ${m === state.month ? "selected" : ""}>${monthLabel(m)}</option>`).join("");
}

function renderSummary(bundle) {
  const counts = countStatuses(bundle.records, state.shift);
  const schoolCount = Object.keys(bundle.records).length;
  const latest = latestDataDay(bundle.records, bundle.month);
  $("#summaryGrid").innerHTML = `
    <article class="card summary-card school-card-kpi"><span class="label">Escolas</span><strong class="value">${schoolCount}</strong><div class="note">presentes neste mês</div></article>
    <article class="card summary-card sent-card"><span class="label">Com frequência</span><strong class="value">${counts.G || 0}</strong><div class="note">registros escola × dia × turno</div></article>
    <article class="card summary-card pending-card"><span class="label">Pendentes</span><strong class="value">${counts.R || 0}</strong><div class="note">marcados em vermelho no Monitora</div></article>
    <article class="card summary-card justified-card"><span class="label">Justificadas</span><strong class="value">${counts.J || 0}</strong><div class="note">${latest ? `dados com situação até o dia ${String(latest).padStart(2,"0")}` : "sem situação registrada"}</div></article>`;
}

function schoolMatches(meta, record) {
  const query = normalizeText(state.search);
  if (query) {
    const hay = normalizeText([meta?.name, meta?.area, meta?.city, meta?.inep].join(" "));
    if (!hay.includes(query)) return false;
  }
  if (state.shift !== "TODOS" && !record?.s?.[state.shift]) return false;
  if (state.status !== "TODOS") {
    const target = STATUS_CHAR[state.status];
    const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift];
    const found = shifts.some(shift => (record?.s?.[shift] || "").includes(target));
    if (!found) return false;
  }
  return true;
}

function perSchoolCounts(record, shifts) {
  const out = { G: 0, R: 0, J: 0 };
  shifts.forEach(shift => {
    for (const ch of record?.s?.[shift] || "") if (ch in out) out[ch]++;
  });
  return out;
}

function renderSchoolCard(id, meta, record, month) {
  const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift].filter(s => record?.s?.[s]);
  const counts = perSchoolCounts(record, shifts);
  const ndays = daysInMonth(month);
  return `
    <article class="card school-card">
      <header class="school-head">
        <div class="school-name">
          <h3>${escapeHtml(meta?.name || id)}</h3>
          <div class="school-meta">
            ${meta?.area ? `<span class="meta-pill">${escapeHtml(meta.area)}</span>` : ""}
            ${meta?.city ? `<span class="meta-pill">${escapeHtml(meta.city)}</span>` : ""}
            ${meta?.inep ? `<span class="meta-pill">INEP ${escapeHtml(meta.inep)}</span>` : ""}
          </div>
        </div>
        <div class="school-counts">
          <div class="school-count"><strong>${counts.G}</strong><small>freq.</small></div>
          <div class="school-count"><strong>${counts.R}</strong><small>pend.</small></div>
          <div class="school-count"><strong>${counts.J}</strong><small>just.</small></div>
        </div>
      </header>
      ${shifts.length ? shifts.map(shift => renderShiftRow(record, shift, month, ndays)).join("") : `<div class="empty-card">Sem turnos registrados neste mês.</div>`}
    </article>`;
}

function renderShiftRow(record, shift, month, ndays) {
  const cells = [];
  for (let day = 1; day <= ndays; day++) {
    const ch = statusChar(record, shift, day);
    const info = STATUS_INFO[ch] || STATUS_INFO["?"];
    const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
    const date = `${String(day).padStart(2,"0")}/${month.slice(5,7)}/${month.slice(0,4)}`;
    const title = `${date} · ${SHIFT_LABELS[shift]} · ${info.label}${reason ? ` · ${reason}` : ""}`;
    cells.push(`<div class="day-cell ${info.cls}" title="${escapeHtml(title)}"><b>${day}</b><small>${info.short}</small></div>`);
  }
  return `<div class="shift-row"><div class="shift-name">${SHIFT_LABELS[shift]}</div><div class="days-scroll"><div class="days-grid" style="--days:${ndays}">${cells.join("")}</div></div></div>`;
}

function renderMonitor() {
  renderMonthSelect();
  const bundle = currentBundle();
  renderSummary(bundle);
  $("#monthTitle").textContent = monthLabel(bundle.month);
  const importedText = bundle.importedAt ? ` · Monitora atualizado em ${new Date(bundle.importedAt).toLocaleString("pt-BR")}` : "";
  const dailyText = bundle.dailyImportedAt ? ` · CSV diário atualizado em ${new Date(bundle.dailyImportedAt).toLocaleString("pt-BR")}` : "";
  $("#sourceInfo").textContent = bundle.source ? `Base: ${bundle.source}${importedText}${dailyText}` : `${importedText}${dailyText}`.replace(/^ · /, "");

  const ids = Object.keys(bundle.records).filter(id => schoolMatches(bundle.schools[id] || {}, bundle.records[id]));
  ids.sort((a,b) => (bundle.schools[a]?.name || a).localeCompare(bundle.schools[b]?.name || b, "pt-BR"));
  $("#resultMeta").textContent = `${ids.length} escola${ids.length === 1 ? "" : "s"} no filtro`;
  $("#schoolList").innerHTML = ids.length
    ? ids.map(id => renderSchoolCard(id, bundle.schools[id] || {}, bundle.records[id], bundle.month)).join("")
    : `<div class="card empty-card">Nenhuma escola encontrada para os filtros atuais.</div>`;
}

function parseMonthYearFromCard(card) {
  for (const b of card.querySelectorAll("b")) {
    const text = b.textContent.replace(/\s+/g, " ").trim();
    const match = text.match(/([A-Za-zÀ-ÿ]+)\s+de\s+(20\d{2})/i);
    if (!match) continue;
    const monthName = normalizeText(match[1]);
    const month = MONTH_INDEX[monthName];
    if (month) return { year: Number(match[2]), month, key: `${match[2]}-${String(month).padStart(2,"0")}` };
  }
  return null;
}

function backgroundChar(span) {
  const normalized = (span.style.backgroundColor || "").replace(/\s+/g, "").toLowerCase();
  return COLOR_CHAR[normalized] || "?";
}

function directDivTexts(header) {
  if (!header) return [];
  return [...header.children].filter(el => el.tagName === "DIV").map(el => el.textContent.replace(/\s+/g," ").trim());
}

function parseReasons(card) {
  const map = {};
  const block = card.querySelector(".lista-justificativas");
  if (!block) return map;
  [...block.children].forEach(div => {
    const text = div.textContent.replace(/\s+/g, " ").trim();
    if (!text.includes(":")) return;
    const [reason, rest] = [text.slice(0, text.indexOf(":")), text.slice(text.indexOf(":") + 1)];
    if (normalizeText(reason) === "justificativas") return;
    const regex = /\b([MTNI])\s*-\s*([0-9; ,]+)/g;
    let match;
    while ((match = regex.exec(rest))) {
      const shift = SHIFT_CODES[match[1]];
      const days = [...match[2].matchAll(/\d{1,2}/g)].map(m => Number(m[0]));
      days.forEach(day => {
        map[String(day)] ||= {};
        map[String(day)][shift] = reason.trim();
      });
    }
  });
  return map;
}

function parseNonSchoolReasons(card) {
  const map = {};
  const block = card.querySelector(".dias-nao-letivos");
  if (!block) return map;
  [...block.children].forEach(span => {
    const text = span.textContent.replace(/\s+/g," ").trim();
    if (!text.includes(":")) return;
    const reason = text.slice(0, text.indexOf(":")).trim();
    const rest = text.slice(text.indexOf(":") + 1);
    [...rest.matchAll(/\d{1,2}/g)].forEach(m => { map[String(Number(m[0]))] = reason; });
  });
  return map;
}

function parseMonitoraCard(card) {
  const my = parseMonthYearFromCard(card);
  if (!my) return null;
  const lines = directDivTexts(card.querySelector(".escola-header"));
  if (!lines.length) return null;
  const name = lines[0] || "";
  const area = lines[1] || "";
  const city = (lines[2] || "").replace(/^Cidade:\s*/i, "").trim();
  const inep = (lines[3] || "").replace(/^Inep:\s*/i, "").trim();
  const sourceId = card.dataset.id || "";
  const id = inep || sourceId || normalizeText(name).replace(/[^a-z0-9]+/g,"-");
  const reasons = parseReasons(card);
  const nonSchoolReasons = parseNonSchoolReasons(card);
  const table = card.querySelector("table");
  if (!table) return null;

  const rows = [...table.querySelectorAll("tr")];
  const raw = {};
  const shiftCodes = new Set();
  rows.forEach((row, idx) => {
    const cells = [...row.children].filter(el => el.tagName === "TD" || el.tagName === "TH");
    const headers = [];
    cells.forEach((cell, ci) => {
      const text = cell.textContent.replace(/\s+/g," ").trim();
      const m = text.match(/^([A-ZÇ]{3})\s+(\d{1,2})$/);
      if (m) headers.push({ ci, weekday: m[1], day: Number(m[2]) });
    });
    if (!headers.length || !rows[idx + 1]) return;
    const dataCells = [...rows[idx + 1].children].filter(el => el.tagName === "TD");
    headers.forEach(h => {
      const cell = dataCells[h.ci];
      if (!cell) return;
      const badges = [...cell.querySelectorAll("span.turno-badge")].map(span => {
        const code = span.textContent.replace(/\s+/g," ").trim();
        const dataId = span.dataset.id || "";
        if (SHIFT_CODES[dataId]) shiftCodes.add(dataId);
        return { code, dataId, ch: backgroundChar(span) };
      });
      raw[h.day] = { weekday: h.weekday, badges };
    });
  });

  const ndays = new Date(my.year, my.month, 0).getDate();
  const shifts = ["M","T","N","I"].filter(code => shiftCodes.has(code));
  const strings = {};
  shifts.forEach(code => {
    let str = "";
    for (let day = 1; day <= ndays; day++) {
      const badges = raw[day]?.badges || [];
      const explicit = badges.find(b => b.dataId === code);
      const weekend = badges.some(b => b.code === "S" || b.code === "D");
      str += explicit ? explicit.ch : weekend ? "X" : ".";
    }
    strings[SHIFT_CODES[code]] = str;
  });

  const record = { s: strings };
  if (Object.keys(reasons).length) record.r = reasons;
  if (Object.keys(nonSchoolReasons).length) record.n = nonSchoolReasons;
  return {
    month: my.key,
    meta: { id, name, area, city, inep: inep || id },
    record
  };
}

function parseMonitoraHTML(html, fileName) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const cards = [...doc.querySelectorAll("#escola-pdf2 .card.mb-3")];
  if (!cards.length) throw new Error("Não encontrei os cartões de escolas do Acompanhamento de Frequência neste HTML.");
  const parsed = cards.map(parseMonitoraCard).filter(Boolean);
  if (!parsed.length) throw new Error("O HTML foi aberto, mas não encontrei dados mensais de frequência.");
  const months = [...new Set(parsed.map(p => p.month))];
  if (months.length !== 1) throw new Error("O arquivo contém mais de um mês ou não foi possível identificar um único mês.");
  const month = months[0];
  const records = {}, schoolsMeta = {};
  parsed.forEach(p => { records[p.meta.id] = p.record; schoolsMeta[p.meta.id] = p.meta; });
  return { month, fileName, records, schoolsMeta };
}

function importCounts(records) {
  return countStatuses(records, "TODOS");
}

function diffImport(parsed) {
  const current = currentBundle(parsed.month);
  const ndays = daysInMonth(parsed.month);
  let changes = 0, resolved = 0, newPending = 0, newJustified = 0, newFrequency = 0;
  Object.entries(parsed.records).forEach(([id, next]) => {
    const prev = current.records[id] || { s: {} };
    const shifts = [...new Set([...recordShifts(prev), ...recordShifts(next)])];
    shifts.forEach(shift => {
      for (let day = 1; day <= ndays; day++) {
        const a = statusChar(prev, shift, day), b = statusChar(next, shift, day);
        if (a === b) continue;
        changes++;
        if (a === "R" && (b === "G" || b === "J")) resolved++;
        if (b === "R" && a !== "R") newPending++;
        if (b === "J" && a !== "J") newJustified++;
        if (b === "G" && a !== "G") newFrequency++;
      }
    });
  });
  return { changes, resolved, newPending, newJustified, newFrequency, currentSchools: Object.keys(current.records).length };
}

function renderImportPreview(parsed) {
  const counts = importCounts(parsed.records);
  const diff = diffImport(parsed);
  const schoolCount = Object.keys(parsed.records).length;
  $("#previewTitle").textContent = `${parsed.fileName} · ${monthLabel(parsed.month)}`;
  $("#importPreview").className = "";
  $("#importPreview").innerHTML = `
    <div class="preview-grid">
      <div class="preview-stat"><strong>${schoolCount}</strong><span>escolas encontradas</span></div>
      <div class="preview-stat"><strong>${counts.R || 0}</strong><span>pendências no arquivo</span></div>
      <div class="preview-stat"><strong>${counts.G || 0}</strong><span>registros com frequência</span></div>
      <div class="preview-stat"><strong>${counts.J || 0}</strong><span>registros justificados</span></div>
    </div>
    <div class="diff-list">
      <div class="diff-row"><span>Alterações em relação ao app</span><strong>${diff.changes}</strong></div>
      <div class="diff-row"><span>Pendências que passam a frequência/justificada</span><strong>${diff.resolved}</strong></div>
      <div class="diff-row"><span>Novas pendências detectadas</span><strong>${diff.newPending}</strong></div>
      <div class="diff-row"><span>Novas justificativas detectadas</span><strong>${diff.newJustified}</strong></div>
      <div class="diff-row"><span>Novos registros com frequência</span><strong>${diff.newFrequency}</strong></div>
    </div>
    ${schoolCount < diff.currentSchools ? `<div class="import-warning">Este HTML contém ${schoolCount} escolas, enquanto o app já possui ${diff.currentSchools} neste mês. A importação é segura: somente as escolas presentes no arquivo serão atualizadas; as demais serão mantidas.</div>` : ""}`;
}

function processFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = parseMonitoraHTML(String(reader.result || ""), file.name);
      state.preview = parsed;
      renderImportPreview(parsed);
      $("#applyImport").disabled = false;
    } catch (err) {
      console.error(err);
      state.preview = null;
      $("#applyImport").disabled = true;
      showToast(err.message || "Não foi possível ler o HTML do Monitora.");
    }
  };
  reader.readAsText(file, "utf-8");
}

function applyImport() {
  if (!state.preview) return;
  const parsed = state.preview;
  const overrides = readOverrides();
  const current = overrides[parsed.month] || { records: {}, schoolsMeta: {} };
  current.records = { ...(current.records || {}), ...parsed.records };
  current.schoolsMeta = { ...(current.schoolsMeta || {}), ...parsed.schoolsMeta };
  current.fileName = parsed.fileName;
  current.importedAt = new Date().toISOString();
  overrides[parsed.month] = current;
  writeOverrides(overrides);
  state.month = parsed.month;
  clearImport(false);
  renderMonitor();
  switchView("monitor");
  showToast(`${Object.keys(parsed.records).length} escolas atualizadas em ${monthLabel(parsed.month)}.`);
}

function clearImport(resetInput = true) {
  state.preview = null;
  $("#applyImport").disabled = true;
  if (resetInput) $("#monitoraInput").value = "";
  $("#previewTitle").textContent = "Nenhum arquivo selecionado";
  $("#importPreview").className = "empty-preview";
  $("#importPreview").innerHTML = `<div class="preview-icon">HTML</div><strong>Aguardando arquivo</strong><span>O mês, as escolas e as alterações aparecerão aqui antes da confirmação.</span>`;
}


function readDailyImports() {
  try { return JSON.parse(localStorage.getItem(DAILY_STORAGE_KEY) || "{}"); }
  catch { return {}; }
}

function writeDailyImports(data) {
  localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(data));
}

function localISODate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDelimitedLine(line, delimiter) {
  const out = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') { current += '"'; i++; }
      else quoted = !quoted;
    } else if (ch === delimiter && !quoted) {
      out.push(current);
      current = "";
    } else current += ch;
  }
  out.push(current);
  return out;
}

function normalizeHeader(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "");
}

function parseDailyCSV(text) {
  const clean = String(text || "").replace(/^\uFEFF/, "").trim();
  if (!clean) return [];
  const lines = clean.split(/\r?\n/).filter(line => line.trim());
  if (!lines.length) return [];
  const delimiter = (lines[0].match(/;/g) || []).length >= (lines[0].match(/,/g) || []).length ? ";" : ",";
  const rows = lines.map(line => parseDelimitedLine(line, delimiter));
  const headers = rows.shift().map(normalizeHeader);
  return rows.map(cols => Object.fromEntries(headers.map((h, i) => [h, String(cols[i] ?? "").trim()])));
}

function csvFrequencyStatus(value) {
  const text = normalizeText(value);
  if (!text) return "desconhecida";
  if (text.includes("nao enviada") || text.includes("nao enviado") || text === "nao") return "nao_enviada";
  if (text.includes("enviada") || text.includes("enviado") || text === "sim") return "enviada";
  return "desconhecida";
}

function hashText(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0).toString(36);
}

function findSchoolByCSVName(name, bundle) {
  const target = normalizeText(name);
  if (!target) return null;
  const entries = Object.entries(bundle.schools || {});
  const exact = entries.find(([, meta]) => normalizeText(meta?.name) === target);
  if (exact) return { id: exact[0], meta: exact[1], confidence: "exata" };
  const candidates = entries.filter(([, meta]) => {
    const n = normalizeText(meta?.name);
    return n && (n.includes(target) || target.includes(n));
  });
  if (candidates.length === 1) return { id: candidates[0][0], meta: candidates[0][1], confidence: "aproximada" };
  return null;
}

function buildDailyPreview(fileName, rows) {
  const date = $("#dailyDate").value;
  const shift = $("#dailyShift").value;
  if (!date) throw new Error("Selecione a data da frequência antes do CSV.");
  const month = date.slice(0, 7);
  const bundle = currentBundle(month);
  const mapped = rows.map(row => {
    const schoolName = row.escola || row.nomeescola || row.unidade || row.unidadeescolar || "";
    const director = row.diretor || row.diretorada || row.gestor || "";
    const area = row.gerencia || row.gre || row.polo || "";
    const frequency = csvFrequencyStatus(row.frequencia || row.status || row.situacao || "");
    const match = findSchoolByCSVName(schoolName, bundle);
    const fallbackId = `csv-${hashText(normalizeText(schoolName))}`;
    return {
      schoolName,
      director,
      area,
      frequency,
      turmas: row.turmas || row.qtdturmas || row.quantidadeturmas || "",
      alunos: row.alunos || row.qtdalunos || row.quantidadealunos || "",
      id: match?.id || fallbackId,
      meta: match?.meta || { id: fallbackId, name: schoolName, area, city: "", inep: "" },
      matchConfidence: match?.confidence || "nova"
    };
  }).filter(row => row.schoolName);
  const summary = {
    total: mapped.length,
    sent: mapped.filter(r => r.frequency === "enviada").length,
    pending: mapped.filter(r => r.frequency === "nao_enviada").length,
    unknownStatus: mapped.filter(r => r.frequency === "desconhecida").length,
    newSchools: mapped.filter(r => r.matchConfidence === "nova").length
  };
  return { fileName, date, shift, month, rows: mapped, summary };
}

function renderDailyPreview(parsed) {
  const { summary } = parsed;
  $("#dailyPreviewTitle").textContent = `${parsed.fileName} · ${formatDateBR(parsed.date)} · ${SHIFT_LABELS[parsed.shift]}`;
  $("#dailyPreview").className = "";
  $("#dailyPreview").innerHTML = `
    <div class="preview-grid">
      <div class="preview-stat"><strong>${summary.total}</strong><span>escolas no CSV</span></div>
      <div class="preview-stat"><strong>${summary.sent}</strong><span>com frequência</span></div>
      <div class="preview-stat"><strong>${summary.pending}</strong><span>para cobrar</span></div>
      <div class="preview-stat"><strong>${summary.newSchools}</strong><span>novas/não reconhecidas</span></div>
    </div>
    ${summary.unknownStatus ? `<div class="import-warning compact-warning">${summary.unknownStatus} registro(s) possuem situação que não foi reconhecida e não serão aplicados.</div>` : ""}
    <div class="csv-table-wrap">
      <table class="csv-table">
        <thead><tr><th>Escola</th><th>Situação</th><th>Gerência</th><th>Turmas</th><th>Alunos</th></tr></thead>
        <tbody>${parsed.rows.map(row => {
          const cls = row.frequency === "enviada" ? "sent" : row.frequency === "nao_enviada" ? "pending" : "unknown";
          const label = row.frequency === "enviada" ? "Enviada" : row.frequency === "nao_enviada" ? "Não enviada" : "Revisar";
          return `<tr><td><strong>${escapeHtml(row.schoolName)}</strong>${row.matchConfidence === "nova" ? `<br><small class="muted">será adicionada ao acompanhamento</small>` : ""}</td><td><span class="csv-status ${cls}">${label}</span></td><td>${escapeHtml(row.area)}</td><td>${escapeHtml(row.turmas)}</td><td>${escapeHtml(row.alunos)}</td></tr>`;
        }).join("")}</tbody>
      </table>
    </div>`;
}

function processDailyFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const rows = parseDailyCSV(String(reader.result || ""));
      if (!rows.length) throw new Error("O CSV está vazio ou não pôde ser interpretado.");
      const parsed = buildDailyPreview(file.name, rows);
      state.dailyPreview = parsed;
      renderDailyPreview(parsed);
      $("#applyDaily").disabled = !parsed.rows.length;
    } catch (err) {
      console.error(err);
      state.dailyPreview = null;
      $("#applyDaily").disabled = true;
      showToast(err.message || "Não foi possível ler o CSV diário.");
    }
  };
  reader.readAsText(file, "utf-8");
}

function setStatusChar(record, shift, day, char, month) {
  const ndays = daysInMonth(month);
  record.s ||= {};
  let str = String(record.s[shift] || "");
  if (str.length < ndays) str = str.padEnd(ndays, ".");
  if (str.length > ndays) str = str.slice(0, ndays);
  const arr = [...str];
  arr[day - 1] = char;
  record.s[shift] = arr.join("");
  return record;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function applyDailyCSV() {
  if (!state.dailyPreview) return;
  const selectedDate = $("#dailyDate").value;
  const selectedShift = $("#dailyShift").value;
  if (selectedDate !== state.dailyPreview.date || selectedShift !== state.dailyPreview.shift) {
    showToast("A data ou o turno mudou depois da leitura. Selecione novamente o CSV para confirmar.");
    return;
  }
  const parsed = state.dailyPreview;
  const day = Number(parsed.date.slice(-2));
  const month = parsed.month;
  const bundle = currentBundle(month);
  const overrides = readOverrides();
  const over = overrides[month] || { records: {}, schoolsMeta: {} };
  over.records ||= {};
  over.schoolsMeta ||= {};
  let applied = 0;
  parsed.rows.forEach(row => {
    if (row.frequency === "desconhecida") return;
    const existing = clone(over.records[row.id] || bundle.records[row.id] || { s: {} });
    setStatusChar(existing, parsed.shift, day, row.frequency === "enviada" ? "G" : "R", month);
    over.records[row.id] = existing;
    if (!bundle.schools[row.id] || row.matchConfidence === "nova") over.schoolsMeta[row.id] = row.meta;
    applied++;
  });
  over.dailyImportedAt = new Date().toISOString();
  over.dailyFileName = parsed.fileName;
  overrides[month] = over;
  writeOverrides(overrides);

  const daily = readDailyImports();
  daily[parsed.date] ||= {};
  daily[parsed.date][parsed.shift] = {
    fileName: parsed.fileName,
    importedAt: new Date().toISOString(),
    rows: parsed.rows.map(row => ({
      id: row.id,
      schoolName: row.schoolName,
      director: row.director,
      area: row.area,
      frequency: row.frequency,
      turmas: row.turmas,
      alunos: row.alunos
    }))
  };
  writeDailyImports(daily);

  state.month = month;
  clearDaily(false);
  renderMonitor();
  renderCharges(parsed.date);
  showToast(`${applied} registro(s) do turno ${SHIFT_LABELS[parsed.shift]} atualizados em ${formatDateBR(parsed.date)}.`);
}

function clearDaily(resetInput = true) {
  state.dailyPreview = null;
  $("#applyDaily").disabled = true;
  if (resetInput) $("#dailyCsvInput").value = "";
  $("#dailyPreviewTitle").textContent = "Nenhum arquivo selecionado";
  $("#dailyPreview").className = "empty-preview";
  $("#dailyPreview").innerHTML = `<div class="preview-icon">CSV</div><strong>Aguardando arquivo</strong><span>As frequências enviadas e pendentes aparecerão aqui antes da confirmação.</span>`;
}

function formatDateBR(value) {
  const [y, m, d] = String(value || "").split("-");
  return y && m && d ? `${d}/${m}/${y}` : value;
}

function buildChargeGroups(date) {
  const daily = readDailyImports();
  const dayData = daily[date] || {};
  const month = date.slice(0, 7);
  const day = Number(date.slice(-2));
  const bundle = currentBundle(month);
  const groups = new Map();
  Object.entries(dayData).forEach(([shift, imported]) => {
    (imported.rows || []).forEach(row => {
      if (row.frequency !== "nao_enviada") return;
      const currentRecord = bundle.records[row.id];
      if (currentRecord && statusChar(currentRecord, shift, day) !== "R") return;
      const key = row.id || normalizeText(row.schoolName);
      if (!groups.has(key)) groups.set(key, {
        id: key,
        schoolName: row.schoolName,
        director: row.director,
        area: row.area,
        shifts: []
      });
      const group = groups.get(key);
      if (!group.shifts.includes(shift)) group.shifts.push(shift);
    });
  });
  return [...groups.values()].sort((a, b) => a.schoolName.localeCompare(b.schoolName, "pt-BR"));
}

function chargeMessage(group, date) {
  const shifts = group.shifts.map(shift => SHIFT_LABELS[shift]);
  const shiftText = shifts.length === 1 ? shifts[0] : shifts.length === 2 ? shifts.join(" e ") : `${shifts.slice(0, -1).join(", ")} e ${shifts.at(-1)}`;
  return `Olá! Na conferência da frequência escolar referente ao dia ${formatDateBR(date)}, identificamos que a frequência da ${group.schoolName}, no(s) turno(s) ${shiftText}, não consta como enviada no sistema. Solicitamos, por gentileza, que seja realizada a verificação e, se necessário, a regularização do registro. Após o ajuste, pedimos que nos confirme por aqui. Obrigado!`;
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("Mensagem copiada."));
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  showToast("Mensagem copiada.");
}

function renderCharges(date = $("#dailyDate")?.value) {
  if (!date) return;
  const groups = buildChargeGroups(date);
  state.chargeGroups = groups;
  $("#chargeTitle").textContent = `Pendências de ${formatDateBR(date)}`;
  const daily = readDailyImports()[date] || {};
  const importedShifts = Object.keys(daily).map(s => SHIFT_LABELS[s]);
  $("#chargeSubtitle").textContent = importedShifts.length
    ? `Turnos importados: ${importedShifts.join(", ")}. ${groups.length} escola(s) aguardando regularização.`
    : "Importe os turnos do dia para consolidar as cobranças.";
  $("#copyAllCharges").disabled = !groups.length;
  $("#chargeList").innerHTML = groups.length ? groups.map((group, index) => `
    <article class="charge-item">
      <div>
        <h3>${escapeHtml(group.schoolName)}</h3>
        <p>${escapeHtml(group.area || "")}${group.director ? ` · Diretor(a): ${escapeHtml(group.director)}` : ""}</p>
      </div>
      <div class="charge-shifts">${group.shifts.map(shift => `<span class="charge-shift">${SHIFT_LABELS[shift]}</span>`).join("")}</div>
      <button class="charge-copy" type="button" data-charge-index="${index}">Copiar mensagem</button>
    </article>`).join("") : `<div class="empty-preview small-empty"><strong>Sem pendências nos turnos importados</strong><span>Nenhuma escola permanece marcada como “não enviada” para esta data.</span></div>`;
  $$('[data-charge-index]').forEach(button => button.addEventListener('click', () => {
    const group = state.chargeGroups[Number(button.dataset.chargeIndex)];
    if (group) copyText(chargeMessage(group, date));
  }));
}

function copyAllCharges() {
  const date = $("#dailyDate").value;
  if (!date || !state.chargeGroups.length) return;
  copyText(state.chargeGroups.map(group => chargeMessage(group, date)).join("\n\n--------------------\n\n"));
}

function switchView(view) {
  $$(".nav-button").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $$(".view").forEach(panel => panel.classList.toggle("active", panel.dataset.viewPanel === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function bindEvents() {
  $$(".nav-button").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  $("#monthSelect").addEventListener("change", e => { state.month = e.target.value; renderMonitor(); });
  $("#schoolSearch").addEventListener("input", e => { state.search = e.target.value; renderMonitor(); });
  $("#shiftFilter").addEventListener("change", e => { state.shift = e.target.value; renderMonitor(); });
  $("#statusFilter").addEventListener("change", e => { state.status = e.target.value; renderMonitor(); });

  const input = $("#monitoraInput");
  input.addEventListener("change", () => processFile(input.files?.[0]));
  $("#applyImport").addEventListener("click", applyImport);
  $("#clearImport").addEventListener("click", () => clearImport(true));

  const drop = $("#dropZone");
  ["dragenter","dragover"].forEach(name => drop.addEventListener(name, e => { e.preventDefault(); drop.classList.add("drag"); }));
  ["dragleave","drop"].forEach(name => drop.addEventListener(name, e => { e.preventDefault(); drop.classList.remove("drag"); }));
  drop.addEventListener("drop", e => processFile(e.dataTransfer?.files?.[0]));

  const csvInput = $("#dailyCsvInput");
  csvInput.addEventListener("change", () => processDailyFile(csvInput.files?.[0]));
  $("#applyDaily").addEventListener("click", applyDailyCSV);
  $("#clearDaily").addEventListener("click", () => clearDaily(true));
  $("#dailyDate").addEventListener("change", e => { clearDaily(true); renderCharges(e.target.value); });
  $("#dailyShift").addEventListener("change", () => clearDaily(true));
  $("#copyAllCharges").addEventListener("click", copyAllCharges);

  const csvDrop = $("#csvDropZone");
  ["dragenter","dragover"].forEach(name => csvDrop.addEventListener(name, e => { e.preventDefault(); csvDrop.classList.add("drag"); }));
  ["dragleave","drop"].forEach(name => csvDrop.addEventListener(name, e => { e.preventDefault(); csvDrop.classList.remove("drag"); }));
  csvDrop.addEventListener("drop", e => processDailyFile(e.dataTransfer?.files?.[0]));
}

function init() {
  const months = allMonths();
  if (months.length) state.month = months[months.length - 1];
  $("#dailyDate").value = localISODate();
  bindEvents();
  renderMonitor();
  renderCharges($("#dailyDate").value);
}

document.addEventListener("DOMContentLoaded", init);
