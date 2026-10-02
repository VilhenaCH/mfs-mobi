# MFS v1.0.1 · Status Fix

Correção defensiva para a sincronização Companion.

Se o payload indicar `aulaRegistrada = true`, o MFS força o status `G` (Com frequência), mesmo que um status `J` incorreto venha no pacote.

Depois da atualização, ressincronize os períodos afetados para corrigir os registros já salvos.
