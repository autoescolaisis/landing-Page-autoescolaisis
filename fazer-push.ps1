# Script para fazer push das alterações para o GitHub
# Execute este script quando tiver as credenciais corretas

Write-Host "🚀 Preparando para fazer push das alterações..." -ForegroundColor Cyan
Write-Host ""

# Navegar para o diretório do projeto
Set-Location "c:\Users\ssoar\Downloads\auto escola isis\pronto"

# Verificar status
Write-Host "📊 Verificando status do repositório..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "📤 Tentando fazer push para o GitHub..." -ForegroundColor Yellow
Write-Host ""

# Tentar fazer push
$result = git push origin master 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Acesse: https://github.com/autoescolaisis/landing-Page-autoescolaisis" -ForegroundColor Cyan
} else {
    Write-Host "❌ Erro ao fazer push:" -ForegroundColor Red
    Write-Host $result -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Dicas:" -ForegroundColor Yellow
    Write-Host "1. Verifique se você está autenticado com a conta 'autoescolaisis'" -ForegroundColor White
    Write-Host "2. Use um Personal Access Token como senha" -ForegroundColor White
    Write-Host "3. Consulte o arquivo COMO-FAZER-PUSH.md para mais opções" -ForegroundColor White
}

Write-Host ""
Write-Host "Pressione qualquer tecla para sair..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

