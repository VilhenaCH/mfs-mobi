"use strict";

const SEED = {"schools":{"23174960":{"id":"23174960","name":"CEI HELENA PONTES","area":"DISTRITO-SEDE","city":"QUIXERAMOBIM","inep":"23174960"},"22026487":{"id":"22026487","name":"CEJA PROFESSORA MARIA RODRIGUES DAS MERCEDES","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22026487"},"22026495":{"id":"22026495","name":"CEJA PROFESSORA SHIRLEY COSTA E SILVA","area":"19ª GRE - TERESINA","city":"TERESINA","inep":"22026495"},"22035907":{"id":"22035907","name":"CETI CONEGO CARDOSO","area":"05ª GRE - CAMPO MAIOR","city":"CASTELO DO PIAUI","inep":"22035907"},"22045058":{"id":"22045058","name":"CETI COSTA E SILVA","area":"06ª GRE - REGENERAÇÃO","city":"PASSAGEM FRANCA DO PIAUI","inep":"22045058"},"22027432":{"id":"22027432","name":"CETI DEPUTADO ALBERTO MONTEIRO","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22027432"},"22027475":{"id":"22027475","name":"CETI DIDACIO SILVA","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027475"},"22029982":{"id":"22029982","name":"CETI FENELON CASTELO BRANCO","area":"18ª GRE - GRANDE TERESINA","city":"UNIAO","inep":"22029982"},"22019952":{"id":"22019952","name":"CETI FIRMO JOSE DA CUNHA","area":"18ª GRE - GRANDE TERESINA","city":"JOSE DE FREITAS","inep":"22019952"},"22088814":{"id":"22088814","name":"CETI FRANCISCA PEREIRA DE SOUSA MORAIS","area":"16ª GRE - FRONTEIRAS","city":"FRONTEIRAS","inep":"22088814"},"22136703":{"id":"22136703","name":"CETI FRANCISCA TRINDADE","area":"02ª GRE - BARRAS","city":"BARRAS","inep":"22136703"},"22019804":{"id":"22019804","name":"CETI FRANCISCO LUIS DE MORAES","area":"18ª GRE - GRANDE TERESINA","city":"LAGOA DO PIAUI","inep":"22019804"},"22131035":{"id":"22131035","name":"CETI JOÃO BATISTA","area":"03ª GRE - PIRIPIRI","city":"SAO JOAO DA FRONTEIRA","inep":"22131035"},"22021990":{"id":"22021990","name":"CETI JOAO MENDES OLIMPIO DE MELO","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22021990"},"22014535":{"id":"22014535","name":"CETI LIMA REBELO","area":"01ª GRE - PARNAIBA","city":"PARNAIBA","inep":"22014535"},"22027556":{"id":"22027556","name":"CETI MARIA MODESTINA BEZERRA","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027556"},"22132147":{"id":"22132147","name":"CETI MARIANO RABELO DE SEPULVIDA","area":"07ª GRE - VALENÇA","city":"LAGOA DO SITIO","inep":"22132147"},"22095608":{"id":"22095608","name":"CETI MARTINHO VIEIRA","area":"17ª GRE - PAULISTANA","city":"PATOS DO PIAUI","inep":"22095608"},"22003100":{"id":"22003100","name":"CETI MIGUEL ARCOVERDE","area":"03ª GRE - PIRIPIRI","city":"BRASILEIRA","inep":"22003100"},"22027599":{"id":"22027599","name":"CETI NAIR GONCALVES","area":"19ª GRE - TERESINA","city":"TERESINA","inep":"22027599"},"22134840":{"id":"22134840","name":"CETI OLEGARIO AURELIANO DE SOUSA","area":"12ª GRE - SÃO JOÃO DO PIAUÍ","city":"BELA VISTA DO PIAUI","inep":"22134840"},"22015787":{"id":"22015787","name":"CETI OZIAS CORREIA","area":"01ª GRE - PARNAIBA","city":"PARNAIBA","inep":"22015787"},"22129650":{"id":"22129650","name":"CETI PEDRO COELHO DE RESENDE","area":"05ª GRE - CAMPO MAIOR","city":"BOA HORA","inep":"22129650"},"22027297":{"id":"22027297","name":"CETI PROFESSOR RALDIR CAVALCANTE BASTOS","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027297"},"22135499":{"id":"22135499","name":"CETI PROFESSOR ANTONIO TARCISO PEREIRA E SILVA","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22135499"},"22139923":{"id":"22139923","name":"CETI PROFESSOR FLORESTAN FERNANDES","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22139923"},"22125787":{"id":"22125787","name":"CETI PROFESSOR FRANCISCO LUIS DE OLIVEIRA","area":"05ª GRE - CAMPO MAIOR","city":"JATOBA DO PIAUI","inep":"22125787"},"22027327":{"id":"22027327","name":"CETI PROFESSOR JOCA VIEIRA","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22027327"},"22028455":{"id":"22028455","name":"CETI PROFESSOR JOSE AMAVEL","area":"20ª GRE - TERESINA","city":"TERESINA","inep":"22028455"},"22029869":{"id":"22029869","name":"CETI PROFESSORA ELISA SOUSA","area":"18ª GRE - GRANDE TERESINA","city":"UNIAO","inep":"22029869"},"22027777":{"id":"22027777","name":"CETI PROFESSORA JULIA NUNES ALVES","area":"21ª GRE - TERESINA","city":"TERESINA","inep":"22027777"},"22018220":{"id":"22018220","name":"CETI RAMA BOA","area":"18ª GRE - GRANDE TERESINA","city":"ALTOS","inep":"22018220"},"22095500":{"id":"22095500","name":"CETI REUNIDA DE PATOS","area":"17ª GRE - PAULISTANA","city":"PATOS DO PIAUI","inep":"22095500"},"22022376":{"id":"22022376","name":"CETI ZACARIAS DE GOIS","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22022376"},"22014470":{"id":"22014470","name":"CETI ZULMIRA XAVIER","area":"01ª GRE - PARNAIBA","city":"LUIS CORREIA","inep":"22014470"},"22130659":{"id":"22130659","name":"CMEI ANTOMAR DE CARVALHO GONCALVES","area":"POLO NOVO NILO","city":"UNIAO","inep":"22130659"},"22123067":{"id":"22123067","name":"CMEI MARIA HAYDEE COSTA MEDEIROS","area":"POLO UNIÃO","city":"UNIAO","inep":"22123067"},"22125922":{"id":"22125922","name":"CMEI MINERVINA RODRIGUES CHAVES","area":"POLO BURITI ALEGRE","city":"UNIAO","inep":"22125922"},"23103353":{"id":"23103353","name":"EEF. GAL. WICAR PARENTE DE PAULA PESSOA","area":"DISTRITO-SÃO JOAQUIM","city":"QUIXERAMOBIM","inep":"23103353"},"23103973":{"id":"23103973","name":"EEF. JOSÉ MARINHO DE GÓES","area":"DISTRITO-URUQUÊ","city":"QUIXERAMOBIM","inep":"23103973"},"22006400":{"id":"22006400","name":"EM BERNARDINO GARCIA DO NASCIMENTO","area":"CENTRO-SÃO JOÃO DO ARRAIAL","city":"SAO JOAO DO ARRAIAL","inep":"22006400"},"22250727":{"id":"22250727","name":"EM CLIDENOR DE FREITAS SANTOS","area":"THALITA LIMA SILVA SANTOS","city":"TERESINA","inep":"22250727"},"22028374":{"id":"22028374","name":"EM IOLANDA RAULINO","area":"THALITA LIMA SILVA SANTOS","city":"TERESINA","inep":"22028374"},"22024697":{"id":"22024697","name":"EM MASCARENHAS DE MORAES","area":"TAMIRES TEIXEIRA SANTOS","city":"TERESINA","inep":"22024697"},"22030140":{"id":"22030140","name":"EM MURILO TAVARES DE MELO","area":"POLO DAVID CALDAS","city":"UNIAO","inep":"22030140"},"22024751":{"id":"22024751","name":"EM NOSSA SENHORA DO AMPARO","area":"LUCAS NUNES DE SOUSA","city":"TERESINA","inep":"22024751"},"22028722":{"id":"22028722","name":"EM NOVA BRASILIA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22028722"},"22024905":{"id":"22024905","name":"EM PROFESSORA CRISTINA EVANGELISTA","area":"IVONEIDE MACÊDO SOUSA","city":"TERESINA","inep":"22024905"},"22025090":{"id":"22025090","name":"EM SANTA TERESA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22025090"},"22025030":{"id":"22025030","name":"EM SIMOES FILHO","area":"CINTHIA SILVA COELHO","city":"TERESINA","inep":"22025030"},"22025189":{"id":"22025189","name":"EM VEREADOR VIEIRA TORANGA","area":"ALEX ALVES SILVESTRE","city":"TERESINA","inep":"22025189"},"22156801":{"id":"22156801","name":"ESCOLA TEC. DE TEATRO PROFESSOR JOSE GOMES CAMPOS","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22156801"},"22134310":{"id":"22134310","name":"U E TENENTE ARAUJO","area":"04ª GRE - TERESINA","city":"TERESINA","inep":"22134310"},"22036350":{"id":"22036350","name":"UNIDADE ESCOLAR RAIMUNDO JOAQUIM DOS SANTOS","area":"CENTRO-DOMINGOS MOURAO","city":"DOMINGOS MOURAO","inep":"22036350"}},"months":{"2026-02":{"label":"Fevereiro de 2026","source":"Monitora Fevereiro.html","records":{"23174960":{"s":{"integral":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"..................GGXXGGGGGX","tarde":"..................GGXXGGGGGX","noite":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22026495":{"s":{"manha":"..................RRXXRRRRRX","tarde":"..................RRXXRRRRRX","noite":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22035907":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22045058":{"s":{"noite":"..................RRXXRRRRRX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027432":{"s":{"manha":"..................GGXXGGGGGX","tarde":"..................GGXXGGGGGX","noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027475":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22029982":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22019952":{"s":{"noite":"..................RRXXRRRRRX","integral":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22088814":{"s":{"integral":"..................GGXXGGGGGJ"},"r":{"28":{"integral":"Atividade pedagógica"}},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22136703":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22019804":{"s":{"manha":"..................RRXXRRRRRX","integral":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22131035":{"s":{"noite":"..................GGXXGGGGGX","integral":"..................JGXXGGGGGX"},"r":{"19":{"integral":"Atividade pedagógica"}},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22021990":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22014535":{"s":{"integral":"..................GJXXJJJJGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027556":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22132147":{"s":{"noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22095608":{"s":{"noite":"..................RRXXRRRRRX","integral":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22003100":{"s":{"noite":"..................RRXXRRRRRX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027599":{"s":{"manha":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22134840":{"s":{"manha":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22015787":{"s":{"manha":"..................GGXXGGGGGX","tarde":"..................GGXXGGGGGX","noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22129650":{"s":{"noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027297":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22135499":{"s":{"noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22139923":{"s":{"manha":"..................GGXXGGGGGX","noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22125787":{"s":{"tarde":"..................RRXXRRRRRX","integral":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027327":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22028455":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22029869":{"s":{"manha":"..................RRXXRRRRRX","noite":"..................RRXXRRRRRX","integral":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22027777":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22018220":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22095500":{"s":{"noite":"..................GGXXRRRRRX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22022376":{"s":{"integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22014470":{"s":{"noite":"..................GGXXGGGGGX","integral":"..................GGXXGGGGGX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22130659":{"s":{"manha":"........GGGGGXXXXXGGXXGGGGGX"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"........GGGGGXXXXXGGXXGGGGGX","tarde":"........GGGGGXXXXXGGXXGGGGGX"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"........GGGGGXXXXXGGXXGGGGGX"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX","integral":"XGGGGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"........GGGGGXXXXXGGGXGGGGGX"},"n":{"16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX","noite":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"........GGGGGXXXXXGGXXGGGGGX"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Encontro pedagógico","6":"Encontro pedagógico","16":"Ponto facultativo","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX","noite":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX","noite":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"...GGGXXGGGGGXXXXXGGXXGGGGGX","tarde":"...GGGXXGGGGGXXXXXGGXXGGGGGX"},"n":{"2":"Encontro pedagógico","3":"Encontro pedagógico","16":"Não letivo","18":"Não letivo","17":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"..................RRXXRRRRRX","noite":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22134310":{"s":{"manha":"..................RRXXRRRRRX"},"n":{"9":"Planejamento pedagógico","10":"Planejamento pedagógico","11":"Planejamento pedagógico","12":"Planejamento pedagógico","13":"Planejamento pedagógico","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}},"22036350":{"s":{"manha":"..................GGGXGGGGGX","tarde":"..................GGGXGGGGGX"},"n":{"14":"Feriados / dias santificados","15":"Feriados / dias santificados","16":"Feriados / dias santificados","17":"Feriados / dias santificados","18":"Feriados / dias santificados"}}}},"2026-03":{"label":"Março de 2026","source":"Monitora Março.html","records":{"23174960":{"s":{"integral":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG"},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22026495":{"s":{"manha":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","tarde":"XRRRRRRXRRRRRXXRRRRRXXRRRGGGXGG","noite":"XRRRRRRXRRRRRXXRRRRRXXRRRGGGXGG"},"n":{"14":"Reposição de aulas"}},"22035907":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22045058":{"s":{"noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22027432":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22027475":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22029982":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22019952":{"s":{"noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22088814":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22136703":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"16":{"integral":"Atividade Externa"}},"n":{"14":"Reposição de aulas"}},"22019804":{"s":{"manha":"XRRRRRRXRRRRRXXRRRXRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRXRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas","19":"Feriado municipal"}},"22131035":{"s":{"noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGJXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGJXGG"},"r":{"28":{"integral":"formação de professores","noite":"formação de professores"}},"n":{"14":"Reposição de aulas"}},"22021990":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22014535":{"s":{"integral":"XJGJGJJXJJGGJXXJGGJJXXJGJGJJXGJ"},"n":{"14":"Reposição de aulas"}},"22027556":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22132147":{"s":{"noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22095608":{"s":{"noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22003100":{"s":{"noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22027599":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGJXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGJXGG"},"r":{"28":{"manha":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"14":"Reposição de aulas"}},"22134840":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22015787":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22129650":{"s":{"noite":"XGGGGGJXGGGGGXXGGGGGXXJGGGGJXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXJG"},"n":{"14":"Reposição de aulas"}},"22027297":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22135499":{"s":{"noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22139923":{"s":{"manha":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"20":{"noite":"Acolhimento aos desabrigados da região"},"23":{"noite":"Acolhimento aos desabrigados da região"},"27":{"noite":"Acolhimento aos desabrigados da região"}},"n":{"14":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22027327":{"s":{"integral":"XGGGGGJXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"7":{"integral":"Sábado não letivo"}},"n":{"14":"Reposição de aulas"}},"22028455":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22029869":{"s":{"manha":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22027777":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22018220":{"s":{"integral":"XGGGGGGXGGGGGGXGGGXGXXGGGGGJXGG"},"n":{"19":"Feriado municipal"}},"22095500":{"s":{"noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","integral":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22022376":{"s":{"integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGJXGG"},"r":{"28":{"integral":"Falta de funcionário"}},"n":{"14":"Reposição de aulas"}},"22014470":{"s":{"noite":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG","integral":"XGGGGGGXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"14":"Reposição de aulas"}},"22130659":{"s":{"manha":"XGGGGGXXGGGGGGXGGGGGXXGGGGGXXGG"}},"22123067":{"s":{"manha":"XGGGGGXXGGGGGGXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGGXGGGGGXXGGGGGXXGG"}},"22125922":{"s":{"manha":"XGGGGGXXGGGGGGXGGGGGXXGGGGGXXGG"}},"23103353":{"s":{"manha":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG","tarde":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG"},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG","tarde":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG","integral":"XGGGGGXXGGGGXXXGGGXGXXGGXGGXXGG"},"n":{"13":"Feriados / dias santificados","19":"Feriados / dias santificados","25":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XGGGGGXXGGGGGJXGGGGGXXGGGGGGXGG"},"r":{"14":{"integral":"Ponto Facultativo"}}},"22250727":{"s":{"integral":"XGGJJJXXGGGGGXXGGGGGXXGGGGGXXGG"},"r":{"4":{"integral":"Óbito"},"5":{"integral":"Óbito"},"6":{"integral":"Óbito"}}},"22028374":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","noite":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22024697":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22030140":{"s":{"integral":"XGGGGGXXGGGGGGXGGGGGXXGGGGGXXGG"}},"22024751":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22028722":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22024905":{"s":{"integral":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22025090":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","noite":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22025030":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","noite":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22025189":{"s":{"manha":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"XGGGGGXXGGGGGXXGGGGGXXGGGGGXXGG"}},"22156801":{"s":{"tarde":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR","noite":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22134310":{"s":{"manha":"XRRRRRRXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"14":"Reposição de aulas"}},"22036350":{"s":{"manha":"XGGGGGJXGGGGGXXGGGGJXXGGGGGGXGG","tarde":"XGGGGGJXGGGGGXXGGGGJXXGGGGGGXGG"},"r":{"7":{"tarde":"Sábado não letivo","manha":"Sábado não letivo"},"20":{"tarde":"Sábado não letivo","manha":"Sábado não letivo"}}}}},"2026-04":{"label":"Abril de 2026","source":"Monitora Abril.html","records":{"23174960":{"s":{"integral":"GXXXXGGGGGXXGGXGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","15":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22026495":{"s":{"manha":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","tarde":"GXXXXGGGGGGXRRRRRXXRXGGGXXGGGG","noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22035907":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22045058":{"s":{"noite":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRXX","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGXX"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas","29":"Feriado municipal","30":"Feriado municipal"}},"22027432":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027475":{"s":{"integral":"JXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"r":{"1":{"integral":"Feriados / dias santificados"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22029982":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22019952":{"s":{"noite":"RXXXXRXRRRRXRRRRRXXRXRRRRXRRRR","integral":"RXXXXRXRRRRXRRRRRXXRXRRRRXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","7":"Feriado municipal","18":"Reposição de aulas"}},"22088814":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22136703":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22019804":{"s":{"manha":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","integral":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22131035":{"s":{"noite":"GXXXXGGGGGJXGGGGGXXJXGGGXXGGGG","integral":"GXXXXGGGGGJXGGGGGXXJXGGGXXGGGG"},"r":{"11":{"noite":"Sábado não letivo","integral":"Sábado não letivo"},"20":{"noite":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22021990":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22014535":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027556":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22132147":{"s":{"noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22095608":{"s":{"noite":"RXXXXRRRRRRXRRRRRXXRXRRRRXRRXR","integral":"RXXXXRRRRRRXRRRRRXXRXRRRRXRRXR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","29":"Feriados / dias santificados","18":"Reposição de aulas"}},"22003100":{"s":{"noite":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","integral":"RXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027599":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22134840":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22015787":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22129650":{"s":{"noite":"XXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"XXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"1":"Feriado municipal","2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027297":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22135499":{"s":{"noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22139923":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGRRGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22125787":{"s":{"tarde":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","integral":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027327":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGJGG"},"r":{"28":{"integral":"Atividade Interna"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22028455":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22029869":{"s":{"manha":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","noite":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","integral":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22027777":{"s":{"integral":"GXXXXGGGGGJXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22018220":{"s":{"integral":"JXXXXGGGGGGXGGGGGXXGXJJGXXGGJG"},"r":{"29":{"integral":"Atividade pedagógica"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22095500":{"s":{"noite":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","integral":"GXXXXRGGGGRXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22022376":{"s":{"integral":"GXXXXGGGGGJXGGGGGXXGXGGGXXGGGG"},"r":{"11":{"integral":"Falta de funcionário"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22014470":{"s":{"noite":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG","integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22130659":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGXGG"},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGXGG","tarde":"GXXXXGGGGGGXGGGGGXXGXGGGXXGXGG"},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GXXXXGGGGGGXGGGGGXXGXGGGXXGXGG"},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"GXXXXGGGGGXXGGXGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGXGGXXGXGGGXXGGGG"},"r":{"15":{"manha":"Feriados / dias santificados"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"GXXXXGGGGGXXGGXGGXXJXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGXGGXXJXGGGXXGGGG","integral":"GXXXXGGGGGXXGGXGGXXJXGGGXXGGGG"},"r":{"20":{"manha":"formação de professores","tarde":"formação de professores","integral":"formação de professores"}},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","15":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XXXXXGGGGGXXGGGGGXXJXGGGJXGGGG"},"r":{"20":{"integral":"Ponto Facultativo"},"25":{"integral":"Ponto Facultativo"}},"n":{"1":"Feriados / dias santificados","2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG"},"n":{"2":"Não letivo","20":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","noite":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG"},"n":{"2":"Não letivo","20":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"GXXXXGGGGGGXGGGGGXXGXGGGXXGXGG"},"n":{"2":"Ponto facultativo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","noite":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG"},"n":{"2":"Não letivo","20":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG","noite":"GXXXXGGGGGXXGGGGGXXXXGGGXXGGGG"},"n":{"2":"Não letivo","20":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG","tarde":"GXXXXGGGGGXXGGGGGXXGXGGGXXGGGG"},"n":{"2":"Não letivo","3":"Feriados / dias santificados","21":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR","noite":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22134310":{"s":{"manha":"RXXXXRRRRRRXRRRRRXXRXRRRXXRRRR"},"n":{"2":"Feriados / dias santificados","3":"Feriados / dias santificados","21":"Feriados / dias santificados","18":"Reposição de aulas"}},"22036350":{"s":{"manha":"XXXXXGGGGGGXGGGGGXXGXGGGJXGGGG","tarde":"XXXXXGGGGGGXGGGGGXXGXGGGJXGGGG"},"r":{"25":{"manha":"Antecipação do ponto facultativo","tarde":"Antecipação do ponto facultativo"}},"n":{"1":"Encontro pedagógico","2":"Feriados / dias santificados","3":"Feriados / dias santificados","4":"Feriados / dias santificados","21":"Feriados / dias santificados"}}}},"2026-05":{"label":"Maio de 2026","source":"Monitora Maio.html","records":{"23174960":{"s":{"integral":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22026495":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","noite":"XXXRRRRRRXRRRGGXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22035907":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22045058":{"s":{"noite":"XXXRRRRRRXRRRRRXXRRRRRRXRRRRRXX","integral":"XXXGGGGGGXGGGGGXXGGGGGGXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027432":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027475":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22029982":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22019952":{"s":{"noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22088814":{"s":{"integral":"XXXRGGGGGXGGXGGXXGGGGGGXGGGGGXX"},"n":{"1":"Feriados / dias santificados","13":"Feriado municipal","16":"Reposição de aulas"}},"22136703":{"s":{"integral":"XXXGGGGGGXGGGGJXXGGGGGXXGGGGGXX"},"r":{"15":{"integral":"formação de professores"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22019804":{"s":{"manha":"XXXRRRRRRXRRRRRXXRRRRRRXRRRRRXX","integral":"XXXRRRRRRXRRRRRXXRRRRRRXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22131035":{"s":{"noite":"XXXGGGGGJXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGJXGJGGGXXGGGGGXXGGGGGXX"},"r":{"9":{"integral":"Sábado não letivo","noite":"Sábado não letivo"},"12":{"integral":"Sábado não letivo"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22021990":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22014535":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGGX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027556":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22132147":{"s":{"noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22095608":{"s":{"noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22003100":{"s":{"noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027599":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22134840":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22015787":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGGX","tarde":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGGX","noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGGX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGGX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22129650":{"s":{"noite":"XXXGGGGGRXGGGGGXXGGGGGRXGGGGGXX","integral":"XXXGGGGGGXGGGGJXXGGGGGRXGGGGGXX"},"r":{"8":{"noite":"Causas Naturais"},"15":{"integral":"Causas Naturais"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027297":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22135499":{"s":{"noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22139923":{"s":{"manha":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027327":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22028455":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22029869":{"s":{"manha":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22027777":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22018220":{"s":{"integral":"XXXGGGGGGXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22095500":{"s":{"noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","integral":"XXXGGGGRRXGGGGGXXGGGGGXXRGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22022376":{"s":{"integral":"XXXGGGGGJXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22014470":{"s":{"noite":"XXXGGGGGGXGGGJJXXGGGGGXXGGGGGXX","integral":"XXXGGGGGGXGGGJJXXGGGGGXXGGGGGXX"},"r":{"14":{"noite":"Manutenção Predial","integral":"Manutenção Predial"},"15":{"noite":"Manutenção Predial","integral":"Manutenção Predial"}},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22130659":{"s":{"manha":"XXXGGGGGXXGGGGGGXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22123067":{"s":{"manha":"XXXGGGGGXXGGGGGGXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGGXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22125922":{"s":{"manha":"XXXGGGGGXXGGGGGGXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"23103353":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGJXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGJXX"},"r":{"29":{"manha":"Atividade Externa","tarde":"Atividade Externa"}},"n":{"1":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","integral":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"XXXGGGGGJXGGGGGXXGGGGGXXGGGGGGX"},"r":{"9":{"integral":"Ponto Facultativo"}},"n":{"1":"Feriados / dias santificados"}},"22250727":{"s":{"integral":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"XXXGGGGGXXGGGGGGXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados","4":"Planejamento"}},"22024751":{"s":{"manha":"XXXGGGGGXXGGGGGXXJGJGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","noite":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX","tarde":"XXXGGGGGXXGGGGGXXGGGGGXXGGGGGXX"},"n":{"1":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX","noite":"XXXRRRRRRXRRRRRXXRRRRRXXRRRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22134310":{"s":{"manha":"XXXRRRRRRXRRRRRXXRRRRRXXGGRRRXX"},"n":{"1":"Feriados / dias santificados","16":"Reposição de aulas"}},"22036350":{"s":{"manha":"XXXGGXGGGXGGGGGXXJGGGGXXGGGGGGX","tarde":"XXXGGXGGGXGGGGGXXJGGGGXXGGGGGGX"},"r":{"18":{"manha":"Atividade pedagógica","tarde":"Atividade pedagógica"}},"n":{"1":"Feriados / dias santificados","6":"Encontro pedagógico"}}}},"2026-06":{"label":"Junho de 2026","source":"Monitora Junho.html","records":{"23174960":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22026495":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22035907":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22045058":{"s":{"noite":"GGGXGXXGGGGGGXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGGXGGJGGXXGGGGGGXGG"},"r":{"17":{"integral":"Acolhimento aos desabrigados da região"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027432":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXJG","noite":"GGGXGXXGGGGGXXGGGGGXXGGJGGGXJG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"24":{"noite":"Ponto Facultativo"},"29":{"noite":"Ponto Facultativo","tarde":"Ponto Facultativo"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027475":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22029982":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22019952":{"s":{"noite":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22088814":{"s":{"integral":"GGGXGGXGXXGGGXGGGGGXXGGGGGRXGG"},"n":{"4":"Feriados / dias santificados","9":"Feriado municipal","10":"Feriado municipal","20":"Reposição de aulas"}},"22136703":{"s":{"integral":"GGGXGJXGGGGGXXGGGGGXXGGGJJJXJJ"},"r":{"6":{"integral":"formação de professores"},"25":{"integral":"formação de professores"},"26":{"integral":"formação de professores"},"27":{"integral":"formação de professores"},"29":{"integral":"formação de professores"},"30":{"integral":"formação de professores"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22019804":{"s":{"manha":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22131035":{"s":{"noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGJXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGJGGJXGG"},"r":{"24":{"integral":"Feriados / dias santificados","noite":"Feriados / dias santificados"},"27":{"integral":"Feriados / dias santificados","noite":"Feriados / dias santificados"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22021990":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22014535":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGRXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027556":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22132147":{"s":{"noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22095608":{"s":{"noite":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22003100":{"s":{"noite":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027599":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22134840":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22015787":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22129650":{"s":{"noite":"GGGXGRXGGGGGXXGGGGGXXGGGGGRXXG","integral":"GGGXGRXGGGGGXXGGGGGXXGGGGGRXXG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas","29":"Feriado municipal"}},"22027297":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22135499":{"s":{"noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"26":{"integral":"Acolhimento aos desabrigados da região"},"27":{"integral":"Acolhimento aos desabrigados da região"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22139923":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","noite":"GGGXGXXGGGGGXXGGGGGXXGGJGGGXRG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"r":{"23":{"noite":"Acolhimento aos desabrigados da região"},"24":{"noite":"Acolhimento aos desabrigados da região"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22125787":{"s":{"tarde":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22027327":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22028455":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22029869":{"s":{"manha":"RRRXRXXRRRRRRXRRRRRXXRRRRRRXXR","noite":"RRRXRXXRRRRRRXRRRRRXXRRRRRRXXR","integral":"RRRXRXXRRRRRRXRRRRRXXRRRRRRXXR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas","29":"Feriado municipal"}},"22027777":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22018220":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22095500":{"s":{"noite":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","integral":"RRRXRXXRRGGGXXJGGGGXXGGGGGRXGG"},"r":{"15":{"integral":"Atividade pedagógica"}},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22022376":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGRXGG"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22014470":{"s":{"noite":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXXG","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXXG"},"n":{"4":"Feriados / dias santificados","29":"Feriados / dias santificados","20":"Reposição de aulas"}},"22130659":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGJ","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGJ","integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGJ"},"r":{"30":{"integral":"Atividade Externa","manha":"Atividade Externa","tarde":"Atividade Externa"}},"n":{"4":"Feriados / dias santificados","13":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"GGGXGXXGGGGGRXGGGGGXXGGXGGGXJG"},"r":{"29":{"integral":"Ponto Facultativo"}},"n":{"4":"Feriados / dias santificados","24":"Feriados / dias santificados","20":"Sábado de reposição"}},"22250727":{"s":{"integral":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22028374":{"s":{"manha":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","noite":"GGGXXXXGGGGGXXGGGGGXXGGRGGXXJG"},"r":{"29":{"tarde":"Atividade Externa","noite":"Atividade Externa"}},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22024697":{"s":{"manha":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXJG"},"r":{"29":{"tarde":"Atividade Externa"}},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22030140":{"s":{"integral":"GGGXGXXGGGGGXXGGGGGXXGGGGGGXGG"},"n":{"4":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22028722":{"s":{"manha":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXGXXGGGGGXXGGGGGXXGGGGGXXJG"},"n":{"4":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025090":{"s":{"manha":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXRG","noite":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025030":{"s":{"manha":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG","noite":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXGG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22025189":{"s":{"manha":"GGGXXXXGGGGGXXGGGGRXXGGGGGXXGG","tarde":"GGGXXXXGGGGGXXGGGGGXXGGGGGXXRG"},"n":{"4":"Feriados / dias santificados","5":"Não letivo"}},"22156801":{"s":{"tarde":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR","noite":"RRRXRXXRRRRRXXRRRRRXXRRRRRRXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22134310":{"s":{"manha":"GRRXRXXRRRGRXXGGGGGXXGGGGGGXRR"},"n":{"4":"Feriados / dias santificados","20":"Reposição de aulas"}},"22036350":{"s":{"manha":"GGGXXXXGGGGGXXXGGGGXXGGGGGJXJJ","tarde":"GGGXXXXGGGGGXXXGGGGXXGGGGGJXJJ"},"r":{"27":{"tarde":"Antecipação do ponto facultativo","manha":"Antecipação do ponto facultativo"},"29":{"manha":"Antecipação do ponto facultativo","tarde":"Antecipação do ponto facultativo"},"30":{"manha":"Antecipação do ponto facultativo","tarde":"Antecipação do ponto facultativo"}},"n":{"4":"Feriados / dias santificados","5":"Feriados / dias santificados","15":"Encontro pedagógico"}}}},"2026-07":{"label":"Julho de 2026","source":"Monitora Julho.html","records":{"23174960":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22026487":{"s":{"manha":"GGGXXRGGGGX..................GG","tarde":"GGGXXGGGGGX..................GG","noite":"GGGXXGGGGGX..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22026495":{"s":{"manha":"GGGGXGG......................GG","tarde":"GGGGXGG......................GG","noite":"GGGGXGG......................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22035907":{"s":{"integral":"GGGXXGGGGGJ..................GG"},"r":{"11":{"integral":"Atividade pedagógica"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22045058":{"s":{"noite":"GGGGXGGGGGG..................GG","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027432":{"s":{"manha":"GGGGXGGGGGG..................GG","tarde":"GGGGXGGGGGG..................GG","noite":"GGGJXGGGGGJ..................GG","integral":"GGGJXGGGGGG..................GG"},"r":{"4":{"integral":"Sábado não letivo","noite":"Sábado não letivo"},"11":{"noite":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027475":{"s":{"integral":"GGGXXGGGGGJ..................GG"},"r":{"11":{"integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22029982":{"s":{"integral":"GGGXXGGGGGJ..................GG"},"r":{"11":{"integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22019952":{"s":{"noite":"RRRRXRRRRRR..................RR","integral":"RRRRXRRRRRR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22088814":{"s":{"integral":"GGGXXGGGGGR..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22136703":{"s":{"integral":"JGGXXGGGGGG..................GR"},"r":{"1":{"integral":"Sem Energia"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22019804":{"s":{"manha":"RRRXXRRRRRR..................RR","integral":"RRRXXRRRRRR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22131035":{"s":{"noite":"GGGGXGGGGGG..................GG","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22021990":{"s":{"integral":"GGGXXGGGGGR..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22014535":{"s":{"integral":"GGGXXGGGGGR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027556":{"s":{"integral":"GGGXXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22132147":{"s":{"noite":"GGGGXGRRRRR..................RR","integral":"GGGGXGGGGGG..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22095608":{"s":{"noite":"RRRRXRRRRRR..................RR","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22003100":{"s":{"noite":"RRRRXRRRRRR..................RX","integral":"GJJGXGGGGGJ..................RX"},"r":{"2":{"integral":"Atividade Externa"},"3":{"integral":"Atividade Externa"},"11":{"integral":"Atividade Externa"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico","31":"Feriado municipal"}},"22027599":{"s":{"manha":"GGGXXGGGGGJ..................GG","integral":"GGGXXGGGGGJ..................GG"},"r":{"11":{"manha":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22134840":{"s":{"manha":"GGGGXGGGGGG..................GG","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22015787":{"s":{"manha":"GGGGXGGGGGG..................GR","tarde":"GGGGXGGGGGG..................RR","noite":"GGGGXGGGGGG..................GG","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22129650":{"s":{"noite":"GGGRXGGGGGR..................RR","integral":"GGGRXGGGGGR..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027297":{"s":{"integral":"GGGXXGGGGGR..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22135499":{"s":{"noite":"GGGGXGGGGGG..................GG","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22139923":{"s":{"manha":"GGGGXGGGGGG..................GG","noite":"GGGGXGGGGGG..................RR","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22125787":{"s":{"tarde":"RRRRXRRRRRR..................RR","integral":"RRRRXRRRRRR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027327":{"s":{"integral":"GGGXXGGJGGR..................GG"},"r":{"8":{"integral":"Atividade Interna"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22028455":{"s":{"integral":"GGGXXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22029869":{"s":{"manha":"RRRRXRRRRRR..................RR","noite":"RRRRXRRRRRR..................RR","integral":"RRRRXRRRRRR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22027777":{"s":{"integral":"GGRXXGGGGGJ..................GG"},"r":{"1":{"integral":"Atividade pedagógica"},"11":{"integral":"Atividade pedagógica"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22018220":{"s":{"integral":"GGGXXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22095500":{"s":{"noite":"RRRRXRRRRRR..................RR","integral":"GGRRXGGGGGR..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22022376":{"s":{"integral":"GGJXXGGGGGJ..................GG"},"r":{"3":{"integral":"Atividade Interna"},"11":{"integral":"Atividade Interna"}},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22014470":{"s":{"noite":"GGGGXGRRRRR..................RR","integral":"GGGGXGGGGGG..................GG"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22130659":{"s":{"manha":"GGGXXGGGGGGXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22123067":{"s":{"manha":"GGGXXGGGGGRXGGGG...............","tarde":"GGGXXGGGGGRXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22125922":{"s":{"manha":"GGGXXGGGGGGXGGGG..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"23103353":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"23103973":{"s":{},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Férias coletivas","5":"Férias coletivas","6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22006400":{"s":{"integral":"GGGXXGGGGGGXGGG................"},"n":{"16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas"}},"22250727":{"s":{"integral":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22028374":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXGGGGG..............","noite":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024697":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22030140":{"s":{"integral":"GGGXXGGGGGRXGGGR..............."},"n":{"17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024751":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXRGGGR.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22028722":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22024905":{"s":{"integral":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025090":{"s":{"manha":"RGGXXGGGGGXXGGGGG..............","tarde":"RGGXXGGGGGXXGGGGG..............","noite":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025030":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXGGGGG..............","noite":"GGGXXGGGGGXXGGGRR.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22025189":{"s":{"manha":"GGGXXGGGGGXXGGGGG..............","tarde":"GGGXXGGGGGXXGGGGG.............."},"n":{"20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Férias coletivas","29":"Férias coletivas","30":"Férias coletivas","31":"Férias coletivas"}},"22156801":{"s":{"tarde":"RRRXXRRRRRR..................RR","noite":"RRRXXRRRRRR..................RR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22134310":{"s":{"manha":"GGGXXRGGGRR..................GR"},"n":{"13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Férias coletivas","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas","21":"Férias coletivas","22":"Férias coletivas","23":"Férias coletivas","24":"Férias coletivas","25":"Férias coletivas","26":"Férias coletivas","27":"Férias coletivas","28":"Planejamento pedagógico","29":"Planejamento pedagógico"}},"22036350":{"s":{"manha":"JGGG..................GGJXGGGGG","tarde":"JGGG..................GGJXGGGGG"},"r":{"1":{"tarde":"Atividade Externa","manha":"Atividade Externa"},"25":{"tarde":"Atividade Externa","manha":"Atividade Externa"}},"n":{"6":"Férias coletivas","7":"Férias coletivas","8":"Férias coletivas","9":"Férias coletivas","10":"Férias coletivas","11":"Férias coletivas","12":"Férias coletivas","13":"Férias coletivas","14":"Férias coletivas","15":"Férias coletivas","16":"Feriados / dias santificados","17":"Férias coletivas","18":"Férias coletivas","19":"Férias coletivas","20":"Férias coletivas"}}}},"2026-08":{"label":"Agosto de 2026","source":"Monitora Agosto.html","records":{"23174960":{"s":{"integral":"..GGRRRXXRRRRXXXRRRRRXXRRRRRXXR"},"n":{"14":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","tarde":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","noite":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22026495":{"s":{"manha":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","tarde":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","noite":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22035907":{"s":{"integral":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG"},"r":{"28":{"integral":"Paralisação"}},"n":{"15":"Reposição de aulas"}},"22045058":{"s":{"noite":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG"},"r":{"15":{"integral":"Acolhimento aos desabrigados da região"}},"n":{"22":"Reposição de aulas"}},"22027432":{"s":{"manha":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG","tarde":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG","noite":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGRXG","integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG"},"r":{"15":{"manha":"Sábado não letivo","tarde":"Sábado não letivo","integral":"Sábado não letivo","noite":"Sábado não letivo"}},"n":{"22":"Reposição de aulas"}},"22027475":{"s":{"integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22029982":{"s":{"integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGXXX"},"n":{"15":"Reposição de aulas","31":"Feriado municipal"}},"22019952":{"s":{"noite":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRXXG","integral":"XXRRRRRXXRRRRRRXJRRRRXXRRRRRXXG"},"r":{"17":{"integral":"Acolhimento aos desabrigados da região"}},"n":{"22":"Reposição de aulas"}},"22088814":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22136703":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22019804":{"s":{"manha":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG","integral":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22131035":{"s":{"noite":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22021990":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"r":{"29":{"integral":"Sábado não letivo"}},"n":{"15":"Reposição de aulas"}},"22014535":{"s":{"integral":"XXGGGGGRXGGGGXXXGGGGGXXGGGGGRXG"},"n":{"14":"Feriado municipal","15":"Reposição de aulas"}},"22027556":{"s":{"integral":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22132147":{"s":{"noite":"XXGGGRRXXRRRRRRXRRRGRXXGRGGRGXG","integral":"XXGGGRRXXGGGGGRXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22095608":{"s":{"noite":"XXRRRRRXXRRRJJRXRRRRRXXRRRRRRXR","integral":"XXGGJGGXXGGGGGGXGGGGGXXGGGGGGXG"},"r":{"5":{"integral":"Atividade Interna"},"13":{"noite":"Atividade Interna"},"14":{"noite":"Atividade Interna"}},"n":{"22":"Reposição de aulas"}},"22003100":{"s":{"noite":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRRXR","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22027599":{"s":{"manha":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"r":{"29":{"manha":"Sábado não letivo"}},"n":{"15":"Reposição de aulas"}},"22134840":{"s":{"manha":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG","integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGGXG"},"r":{"15":{"manha":"Sábado não letivo","integral":"Sábado não letivo"}},"n":{"22":"Reposição de aulas"}},"22015787":{"s":{"manha":"XXGGGGGXXGGGGRRXGGGGGXXGGGGGRXG","tarde":"XXGGGGGXXGGGGRRXGRGGGXXGGGGGRXG","noite":"XXGGGGGXXGGGGRRXGGGRRXXRRRRRRXG","integral":"XXGGGGGXXGGGGRRXGGGGGXXGGGGGRXG"},"n":{"22":"Reposição de aulas"}},"22129650":{"s":{"noite":"XXGGGGGXXGGGGGRXGGGRGXXGGGRRRXR","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22027297":{"s":{"integral":"XXGGGGGXXGGGGGJXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22135499":{"s":{"noite":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG","integral":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22139923":{"s":{"manha":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG","noite":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRRXR","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGRGGXG"},"n":{"22":"Reposição de aulas"}},"22125787":{"s":{"tarde":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRRXR","integral":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRRXR"},"n":{"22":"Reposição de aulas"}},"22027327":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22028455":{"s":{"integral":"XXGGGGGXXGGGGGRXGGRGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22029869":{"s":{"manha":"XXRRRRRRXRRRRRRXRRRRRXXRRRRRXXX","noite":"XXRRRRRRXRRRRRRXRRRRRXXRRRRRXXX","integral":"XXRRRRRRXRRRRRRXRRRRRXXRRRRRXXX"},"n":{"22":"Reposição de aulas","29":"Feriado municipal","31":"Feriado municipal"}},"22027777":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22018220":{"s":{"integral":"XXGGGRGXXRGGRRRXGGRRGXXGGGRRXXR"},"n":{"15":"Reposição de aulas"}},"22095500":{"s":{"noite":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRRXR","integral":"XXRGRRGXXRRRRRRXRRRRRXXRRRRRRXR"},"n":{"22":"Reposição de aulas"}},"22022376":{"s":{"integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGXXG"},"n":{"15":"Reposição de aulas"}},"22014470":{"s":{"noite":"XXRGRRRXXGGRRRRXRGGGRXXRRRGRRXR","integral":"XXGGGGGXXGGGGGRXGGGGGXXGGGGGGXG"},"n":{"22":"Reposição de aulas"}},"22130659":{"s":{"manha":"...GGGGXXGGGGGGXGGGGGXXGGGGGXXX"},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"...GGGGXXGGGRGRXGGGGGXXRGGGGXXX","tarde":"...GGGGXXGGGGGRXGGGGGXXRGGGGXXX"},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"...GGGGXXGGGGGRXGGGGGXXRGGRGXXX"},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"..GGRRRXXRRRRXXXRRRRRXXRRRRRXXR","tarde":"..GGRRRXXRRRRXXXRRRRRXXRRRRRXXR"},"n":{"14":"Feriados / dias santificados","15":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"..GGRRRXXRRRRXXXRRRRRXXRRRRRXXR","tarde":"..GGRRRXXRRRRXXXRRRRRXXRRRRRXXR","integral":"..GRRRRXXRRRRXXXRRRRRXXRRRRRXXR"},"n":{"14":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"..GGGGGRXGGGGGXXGGGGGXXGGGGGGXG"}},"22250727":{"s":{"integral":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22028374":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","noite":"....RGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22024697":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22030140":{"s":{"integral":"...GGGGXXGGGGGRXGGGGGXXRGGGGXXX"},"n":{"3":"Planejamento escolar","31":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22028722":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22024905":{"s":{"integral":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025090":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","noite":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025030":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXRGGGGXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG","noite":"....RRRXXGGRRRXXRGGGGXXRGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22025189":{"s":{"manha":"....GGGXXGGGGGXXGGGGGXXGGGGRXXG","tarde":"....GGGXXGGGGGXXGGGGGXXGGGGGXXG"},"n":{"1":"Férias coletivas","2":"Férias coletivas","3":"Férias coletivas","4":"Encontro pedagógico"}},"22156801":{"s":{"tarde":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRXXR","noite":"XXRRRRRXXRRRRRRXRRRRRXXRRRRRXXR"},"n":{"15":"Reposição de aulas"}},"22134310":{"s":{"manha":"XXGGRGGXXGGGGGRXGGGGGXXGGGRRXXG"},"n":{"15":"Reposição de aulas"}},"22036350":{"s":{"manha":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG","tarde":"XXGGGGGXXGGGGGGXGGGGGXXGGGGGXXG"}}}},"2026-09":{"label":"Setembro de 2026","source":"Monitora setembro.html","records":{"23174960":{"s":{"integral":"RRRRXXXRRRRXXRRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados"}},"22026487":{"s":{"manha":"GGGGXXXGGGGGXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGGXGGGGGXXGGGR......","noite":"GGGGXXXGGGGGXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22026495":{"s":{"manha":"GGGGXXXGGGGGXGGRRRXXRRRR......","tarde":"GGGGXXXGGGGGXGGRRRXXRRRR......","noite":"GGGGXXXGGGGGXGRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22035907":{"s":{"integral":"GGGGXXXGGGGGXGGGGGXXGRRR......"},"r":{"11":{"integral":"Atividade pedagógica"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22045058":{"s":{"noite":"GGGGXXXGGGGGXGGGGGXXGGRR......","integral":"GGGGXXXGGGGGXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027432":{"s":{"manha":"GGGGXXXGGGGGXGGGGGXXGGGG......","tarde":"GJGGXXXGGGGGXGGGGGXXGGGR......","noite":"GGGGXXXGGGGRXGGGGGXXGRRR......","integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"r":{"2":{"tarde":"Sem Água"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027475":{"s":{"integral":"GGGGXXXGGGGRXGGGGRXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22029982":{"s":{"integral":"GGGGXXXGGGGRXRRRXRXXRRRR......"},"n":{"7":"Feriados / dias santificados","17":"Feriado municipal","19":"Reposição de aulas"}},"22019952":{"s":{"noite":"GGGGXXXGGGGRXGGGGGXXGGGR......","integral":"GGGGXXXGGGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22088814":{"s":{"integral":"GGGGXXXXGGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","8":"Feriado municipal","19":"Reposição de aulas"}},"22136703":{"s":{"integral":"GGGJXXXGGJGRXGGGGGXXGGGX......"},"r":{"4":{"integral":"Atividade Externa"},"10":{"integral":"Atividade Externa"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas","24":"Feriado municipal"}},"22019804":{"s":{"manha":"GGGGXXXGGGGGXGGGGGXXGGGG......","integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22131035":{"s":{"noite":"GGGGXXXGGGGRXGGGGGXXGGGR......","integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22021990":{"s":{"integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22014535":{"s":{"integral":"GGGGXXXXGGGRXGGGGGXXGRGG......"},"n":{"7":"Feriados / dias santificados","8":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027556":{"s":{"integral":"GGGGXXXGGGGRXGGGGGXXRGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22132147":{"s":{"noite":"GRGGXXXGRRGRXRRGGRXXGGRR......","integral":"GGRGXXXGGGGRXGRGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22095608":{"s":{"noite":"RJRRXXXRRRRRXRRRRRXXRRRR......","integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"r":{"2":{"noite":"Aula Remota"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22003100":{"s":{"noite":"RRRRXXXRRRRRXRRRRRXXRRRR......","integral":"GGGGXXXGRGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027599":{"s":{"manha":"GGGGXXXGGGGRXGGGGGXXGGGG......","integral":"GGGGXXXGGGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22134840":{"s":{"manha":"GGGGXXXGGGGGXGGGGGXXGGGG......","integral":"GGGGXXXGGGGGXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22015787":{"s":{"manha":"GGGGXXXXGGGRXGGGGGXXGGGG......","tarde":"GGGGXXXXGGGRXGGGGGXXGGGR......","noite":"GGGRXXXXGGRRXGGGGRXXGRGR......","integral":"GGGGXXXXGGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","8":"Feriados / dias santificados","19":"Reposição de aulas"}},"22129650":{"s":{"noite":"RRRRXXXRRRRRXRRRRRXXRRRR......","integral":"GGGGXXXGGGGRXGGGRRXXRRRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027297":{"s":{"integral":"GGGGXXXGGGGRXGGGGGXXGGGG......"},"r":{"4":{"integral":"Atividade Externa"}},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22135499":{"s":{"noite":"GGRGXXXGGGGGXGGRGGXXGRRR......","integral":"GGGGXXXGGGGGXGGGGGXXGGRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22139923":{"s":{"manha":"GGGGXXXGGGGRXGGGGGXXGGGG......","noite":"RRRRXXXRRRRRXRRRRRXXRRRR......","integral":"GGGGXXXGGGGRXGGGGRXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22125787":{"s":{"tarde":"RRRRXXXRRRRRXRRRRRXXRRRR......","integral":"RRRRXXXRRRRRXRRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22027327":{"s":{"integral":"GGGGXXXGGGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22028455":{"s":{"integral":"GGGGXXXGGGGRXGGGGGXXGGRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22029869":{"s":{"manha":"RRRRRXXRRRRRXRRRXRXXRRRR......","noite":"RRRRRXXRRRRRXRRRXRXXRRRR......","integral":"RRRRRXXRRRRRXRRRXRXXRRRR......"},"n":{"7":"Feriados / dias santificados","17":"Feriado municipal","19":"Reposição de aulas"}},"22027777":{"s":{"integral":"GGGGXXXGRGGRXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22018220":{"s":{"integral":"GGGGXXXRGRGRXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22095500":{"s":{"noite":"RRRRXXXRRRRRXRRRRRXXRRRR......","integral":"RRRRXXXRRRGRXGGGGGXXRGGG......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22022376":{"s":{"integral":"GGGGXXXGGGGRXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22014470":{"s":{"noite":"RRGRXXXGRRRRXRRRRRXXRRRR......","integral":"GGGRXXXGGGGRXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22130659":{"s":{"manha":"GGGGGXXGGGGXXGRGXGXXGGGG......"},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22123067":{"s":{"manha":"GGGGRXXGGGGXXGGGXGXXGGGG......","tarde":"GGGGRXXGGGGXXGGGXGXXGGGR......"},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22125922":{"s":{"manha":"GGGRRXXGGGGXXGGGXGXXGGGG......"},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"23103353":{"s":{"manha":"RRRRXXXRRRRXXRRRRRXXRRRR......","tarde":"RRRRXXXRRRRXXRRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados"}},"23103973":{"s":{"manha":"RRRRXXXRRRRXXRRRRRXXRRRR......","tarde":"RRRRXXXRRRRXXRRRRRXXRRRR......","integral":"RRRRXXXRRRRXXRRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados"}},"22006400":{"s":{"integral":"GGGGRXXGGGGXXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados","26":"Sábado de reposição"}},"22250727":{"s":{"integral":"GGGGXXXGGGGXXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados"}},"22028374":{"s":{"manha":"GGGGXXXGGGGXXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGR......","noite":"GGGGXXXGGGGXXGGGGGXXGGRR......"},"n":{"7":"Feriados / dias santificados"}},"22024697":{"s":{"manha":"GGGGXXXGGGGXXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGR......"},"r":{"11":{"tarde":"Acolhimento aos desabrigados da região"}},"n":{"7":"Feriados / dias santificados"}},"22030140":{"s":{"integral":"GGGGRXXGGGGXXGGGXGXXGGGR......"},"n":{"7":"Feriados / dias santificados","17":"Feriados / dias santificados"}},"22024751":{"s":{"manha":"GGGGXXXGGRGXXGGGRRXXRRRR......","tarde":"GGGRXXXGGGGXXGGGRRXXRRRR......"},"n":{"7":"Feriados / dias santificados"}},"22028722":{"s":{"manha":"GGGGXXXGGGGXXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados"}},"22024905":{"s":{"integral":"GGGGXXXGGGGXXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados"}},"22025090":{"s":{"manha":"GGGGXXXGGGGXXGGGGGXXGGGR......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGR......","noite":"GGGGXXXGGGGXXGGGGGXXGGGR......"},"n":{"7":"Feriados / dias santificados"}},"22025030":{"s":{"manha":"RGGGXXXGGGGXXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGR......","noite":"GGGRXXXGGGGXXGGGGRXXGGRR......"},"n":{"7":"Feriados / dias santificados"}},"22025189":{"s":{"manha":"GGGGXXXGGGGXXGGGGGXXGGGG......","tarde":"GGGGXXXGGGGXXGGGGGXXGGGG......"},"n":{"7":"Feriados / dias santificados"}},"22156801":{"s":{"tarde":"RRRRXXXRRRRRXRRRRRXXRRRR......","noite":"RRRRXXXRRRRRXRRRRRXXRRRR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22134310":{"s":{"manha":"GGGRXXXGGGRRXGGGRGXXGGGR......"},"n":{"7":"Feriados / dias santificados","19":"Reposição de aulas"}},"22036350":{"s":{"manha":"GGGXXXXGGGGRXGGGGGXXGGGR......","tarde":"GGGXXXXGGGGGXGGGGGXXGGGR......"},"n":{"4":"Encontro pedagógico","7":"Feriados / dias santificados"}}}}}};
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
  chargeGroups: [],
  editor: null
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
    <article class="card summary-card school-card-kpi clickable" data-summary-filter="TODOS"><span class="label">Escolas</span><strong class="value">${schoolCount}</strong><div class="note">presentes neste mês</div></article>
    <article class="card summary-card sent-card clickable" data-summary-filter="enviada"><span class="label">Com frequência</span><strong class="value">${counts.G || 0}</strong><div class="note">clique para filtrar</div></article>
    <article class="card summary-card pending-card clickable" data-summary-filter="pendente"><span class="label">Pendentes</span><strong class="value">${counts.R || 0}</strong><div class="note">clique para filtrar</div></article>
    <article class="card summary-card justified-card clickable" data-summary-filter="justificada"><span class="label">Justificadas</span><strong class="value">${counts.J || 0}</strong><div class="note">${latest ? `situação até o dia ${String(latest).padStart(2,"0")}` : "sem situação registrada"}</div></article>`;
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

function renderMonitor() {
  renderMonthSelect();

  const bundle = currentBundle(state.month);
  const entries = Object.entries(bundle.records || {});

  if ($("#monthTitle")) $("#monthTitle").textContent = bundle.label || monthLabel(state.month);

  if ($("#sourceInfo")) {
    const parts = [];
    if (bundle.source) parts.push(`Base: ${bundle.source}`);
    if (bundle.importedAt) {
      const when = new Date(bundle.importedAt);
      if (!Number.isNaN(when.getTime())) {
        parts.push(`Monitora atualizado em ${when.toLocaleString("pt-BR")}`);
      }
    }
    if (bundle.dailyImportedAt) {
      const when = new Date(bundle.dailyImportedAt);
      if (!Number.isNaN(when.getTime())) {
        parts.push(`CSV diário atualizado em ${when.toLocaleString("pt-BR")}`);
      }
    }
    $("#sourceInfo").textContent = parts.join(" · ") || "Dados históricos carregados no aplicativo.";
  }

  if ($("#monthSelect")) $("#monthSelect").value = state.month;
  if ($("#schoolSearch") && $("#schoolSearch").value !== state.search) $("#schoolSearch").value = state.search;
  if ($("#shiftFilter")) $("#shiftFilter").value = state.shift;
  if ($("#statusFilter")) $("#statusFilter").value = state.status;

  renderSummary(bundle);

  const filtered = entries
    .filter(([id, record]) => schoolMatches(bundle.schools[id] || { id, name: id }, record))
    .sort((a, b) => {
      const nameA = bundle.schools[a[0]]?.name || a[0];
      const nameB = bundle.schools[b[0]]?.name || b[0];
      return nameA.localeCompare(nameB, "pt-BR");
    });

  const latest = latestDataDay(bundle.records || {}, state.month);
  if ($("#resultMeta")) {
    const shiftLabel = state.shift === "TODOS" ? "todos os turnos" : SHIFT_LABELS[state.shift];
    const statusLabel = state.status === "TODOS" ? "todas as situações" : (
      state.status === "enviada" ? "com frequência" :
      state.status === "pendente" ? "pendentes" :
      state.status === "justificada" ? "justificadas" : state.status
    );
    $("#resultMeta").innerHTML = `
      <span><strong>${filtered.length}</strong> escola${filtered.length === 1 ? "" : "s"}</span>
      <span>${escapeHtml(shiftLabel)}</span>
      <span>${escapeHtml(statusLabel)}</span>
      ${latest ? `<span>dados até o dia <strong>${String(latest).padStart(2, "0")}</strong></span>` : ""}
    `;
  }

  if ($("#schoolList")) {
    if (!filtered.length) {
      $("#schoolList").innerHTML = `
        <article class="card empty-card large-empty">
          <strong>Nenhuma escola encontrada</strong>
          <span>Ajuste os filtros ou escolha outro mês.</span>
        </article>`;
    } else {
      $("#schoolList").innerHTML = filtered
        .map(([id, record]) => renderSchoolCard(id, bundle.schools[id] || { id, name: id }, record, state.month))
        .join("");
    }
  }
}

function perSchoolCounts(record, shifts) {
  const out = { G: 0, R: 0, J: 0 };
  shifts.forEach(shift => {
    for (const ch of record?.s?.[shift] || "") if (ch in out) out[ch]++;
  });
  return out;
}

function weekdayShort(month, day) {
  const [year, mo] = month.split("-").map(Number);
  return ["DOM","SEG","TER","QUA","QUI","SEX","SAB"][new Date(year, mo - 1, day).getDay()];
}

function shiftCode(shift) {
  return ({ manha: "M", tarde: "T", noite: "N", integral: "I" })[shift] || "?";
}

function renderCalendarHalf(id, record, shifts, month, startDay, endDay) {
  const cols = endDay - startDay + 1;
  const headers = [];
  const days = [];
  for (let day = startDay; day <= endDay; day++) {
    headers.push(`<div class="calendar-day-head"><span>${weekdayShort(month, day)}</span><strong>${String(day).padStart(2,"0")}</strong></div>`);
    const chips = shifts.map(shift => {
      const ch = statusChar(record, shift, day);
      const info = STATUS_INFO[ch] || STATUS_INFO["?"];
      const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
      const title = `${String(day).padStart(2,"0")}/${month.slice(5,7)}/${month.slice(0,4)} · ${SHIFT_LABELS[shift]} · ${info.label}${reason ? ` · ${reason}` : ""}`;
      return `<button class="status-chip ${info.cls}${reason ? " has-reason" : ""}" type="button" data-edit-status="1" data-school-id="${escapeHtml(id)}" data-day="${day}" data-shift="${shift}" title="${escapeHtml(title)}">${shiftCode(shift)}</button>`;
    }).join("");
    days.push(`<div class="calendar-day">${chips}</div>`);
  }
  return `<div class="calendar-half"><div class="calendar-body"><div class="calendar-header" style="--cols:${cols}">${headers.join("")}</div><div class="calendar-grid" style="--cols:${cols}">${days.join("")}</div></div></div>`;
}

function renderSchoolCard(id, meta, record, month) {
  const shifts = state.shift === "TODOS" ? recordShifts(record) : [state.shift].filter(s => record?.s?.[s]);
  const counts = perSchoolCounts(record, shifts);
  const ndays = daysInMonth(month);
  const nonSchool = Object.entries(record?.n || {}).map(([day, reason]) => `${day}: ${reason}`).join(" · ");
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
      <div class="school-calendar">
        ${shifts.length ? renderCalendarHalf(id, record, shifts, month, 1, Math.min(15, ndays)) + (ndays > 15 ? renderCalendarHalf(id, record, shifts, month, 16, ndays) : "") : `<div class="empty-card">Sem turnos registrados neste mês.</div>`}
      </div>
      <div class="school-footer">
        <span class="hint">Clique em M, T, N ou I para editar</span>
        <span class="non-school-note" title="${escapeHtml(nonSchool)}">${nonSchool ? `Ocorrências: ${escapeHtml(nonSchool)}` : "Sem ocorrências cadastradas"}</span>
      </div>
    </article>`;
}

function openStatusEditor(schoolId, day, shift) {
  const bundle = currentBundle();
  const record = bundle.records[schoolId];
  if (!record) return;
  const meta = bundle.schools[schoolId] || {};
  const ch = statusChar(record, shift, day);
  const reason = record?.r?.[String(day)]?.[shift] || (ch === "X" ? record?.n?.[String(day)] : "") || "";
  state.editor = { schoolId, day: Number(day), shift, month: state.month };
  $("#editorSchool").textContent = meta.name || schoolId;
  $("#editorDate").textContent = `${String(day).padStart(2,"0")}/${state.month.slice(5,7)}/${state.month.slice(0,4)}`;
  $("#editorShift").textContent = SHIFT_LABELS[shift] || shift;
  $("#editorStatus").value = ["G","R","J","X","."].includes(ch) ? ch : ".";
  $("#editorReason").value = reason;
  updateEditorHint();
  const modal = $("#statusModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => $("#editorStatus")?.focus(), 60);
}

function closeStatusEditor() {
  state.editor = null;
  const modal = $("#statusModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function updateEditorHint() {
  const status = $("#editorStatus")?.value;
  const map = {
    G: "Marque quando a frequência foi enviada/regularizada.",
    R: "A escola ficará pendente e poderá aparecer na cobrança diária.",
    J: "Informe o motivo da justificativa para manter o histórico claro.",
    X: "Use para dia/turno não letivo. Você pode registrar o motivo.",
    ".": "Limpa o status deste dia/turno e deixa como sem registro."
  };
  $("#editorHint").textContent = map[status] || "A observação é opcional.";
}

function saveStatusEditor() {
  if (!state.editor) return;
  const { schoolId, day, shift, month } = state.editor;
  const bundle = currentBundle(month);
  const overrides = readOverrides();
  const over = overrides[month] || { records: {}, schoolsMeta: {} };
  over.records ||= {};
  over.schoolsMeta ||= {};
  const record = clone(over.records[schoolId] || bundle.records[schoolId] || { s: {} });
  const ch = $("#editorStatus").value;
  const reason = $("#editorReason").value.trim();
  setStatusChar(record, shift, day, ch, month);
  record.r ||= {};
  if (reason && (ch === "J" || ch === "X" || ch === "R" || ch === "G")) {
    record.r[String(day)] ||= {};
    record.r[String(day)][shift] = reason;
  } else if (record.r[String(day)]?.[shift]) {
    delete record.r[String(day)][shift];
    if (!Object.keys(record.r[String(day)]).length) delete record.r[String(day)];
  }
  over.records[schoolId] = record;
  over.manualUpdatedAt = new Date().toISOString();
  overrides[month] = over;
  writeOverrides(overrides);
  const editedDate = `${month}-${String(day).padStart(2,"0")}`;
  closeStatusEditor();
  renderMonitor();
  if ($("#dailyDate")?.value === editedDate) renderCharges(editedDate);
  showToast(`Status atualizado: ${STATUS_INFO[ch]?.label || "Sem registro"}.`);
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
        let dataId = span.dataset.id || "";
        // No HTML salvo pelo Monitora, os badges da segunda metade do mês
        // podem vir sem data-id. Nesses casos o próprio texto M/T/N/I
        // identifica o turno e precisa ser usado como fallback.
        if (!dataId && SHIFT_CODES[code]) dataId = code;
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
  const importedShifts = Object.keys(dayData);
  if (!importedShifts.length) return [];
  const month = date.slice(0, 7);
  const day = Number(date.slice(-2));
  const bundle = currentBundle(month);
  const groups = new Map();
  const rowMeta = new Map();
  Object.entries(dayData).forEach(([shift, imported]) => {
    (imported.rows || []).forEach(row => rowMeta.set(`${row.id}|${shift}`, row));
  });
  Object.entries(bundle.records).forEach(([id, record]) => {
    importedShifts.forEach(shift => {
      if (statusChar(record, shift, day) !== "R") return;
      const meta = bundle.schools[id] || {};
      const imported = rowMeta.get(`${id}|${shift}`) || {};
      if (!groups.has(id)) groups.set(id, {
        id,
        schoolName: meta.name || imported.schoolName || id,
        director: imported.director || "",
        area: meta.area || imported.area || "",
        shifts: []
      });
      const group = groups.get(id);
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
  const titles = { monitor: "Acompanhamento", daily: "CSV diário", import: "Importar Monitora" };
  if ($("#workspaceTitle")) $("#workspaceTitle").textContent = titles[view] || "Frequência";
  $("#sidebar")?.classList.remove("open");
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
  $$('[data-go-view]').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.goView)));
  $("#menuToggle")?.addEventListener("click", () => $("#sidebar")?.classList.toggle("open"));
  $("#schoolList")?.addEventListener("click", event => {
    const chip = event.target.closest("[data-edit-status]");
    if (!chip) return;
    openStatusEditor(chip.dataset.schoolId, Number(chip.dataset.day), chip.dataset.shift);
  });
  $("#summaryGrid")?.addEventListener("click", event => {
    const card = event.target.closest("[data-summary-filter]");
    if (!card) return;
    state.status = card.dataset.summaryFilter;
    $("#statusFilter").value = state.status;
    renderMonitor();
  });
  $("#closeEditor")?.addEventListener("click", closeStatusEditor);
  $("#cancelEditor")?.addEventListener("click", closeStatusEditor);
  $("#saveEditor")?.addEventListener("click", saveStatusEditor);
  $("#editorStatus")?.addEventListener("change", updateEditorHint);
  $("#statusModal")?.addEventListener("click", event => { if (event.target.id === "statusModal") closeStatusEditor(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && $("#statusModal")?.classList.contains("open")) closeStatusEditor(); });
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
  try {
    const months = allMonths();
    if (months.length) state.month = months[months.length - 1];
    $("#dailyDate").value = localISODate();
    bindEvents();
    renderMonitor();
    renderCharges($("#dailyDate").value);
  } catch (error) {
    console.error("Falha ao iniciar o aplicativo:", error);
    const list = $("#schoolList");
    if (list) {
      list.innerHTML = `<article class="card empty-card large-empty"><strong>Erro ao carregar o acompanhamento</strong><span>${escapeHtml(error?.message || "Erro inesperado de inicialização.")}</span></article>`;
    }
    const meta = $("#resultMeta");
    if (meta) meta.textContent = "O JavaScript encontrou um erro ao iniciar. Abra o console do navegador para detalhes.";
  }
}

document.addEventListener("DOMContentLoaded", init);
